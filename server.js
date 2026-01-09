const express = require('express');
const qrcode = require('qrcode');
const { v4: uuidv4 } = require('uuid');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

// Set default data
db.defaults({ faktur: [], profil: {} }).write();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// 1. Dashboard Utama
app.get('/', (req, res) => {
    const faktur = db.get('faktur').value();
    const totalPPN = faktur.reduce((sum, f) => sum + f.ppn, 0);
    res.render('index', { faktur, totalPPN });
});

// 2. Form Tambah Faktur
app.get('/tambah', (req, res) => {
    res.render('tambah');
});

// 3. Simpan Faktur dengan Generate QR Code
app.post('/simpan', async (req, res) => {
    const { nomorFaktur, lawanTransaksi, dpp, npwp } = req.body;
    const dppNum = parseFloat(dpp);
    const ppn = dppNum * 0.11; // PPN 11% (Tarif 2026)
    
    // Simulasi QR Code Validasi DJP
    const qrData = `vclaim.pajak.go.id{uuidv4()}`;
    const qrImage = await qrcode.toDataURL(qrData);

    const dataBaru = {
        id: uuidv4(),
        nomorFaktur,
        npwp,
        lawanTransaksi,
        dpp: dppNum,
        ppn: ppn,
        tanggal: new Date().toISOString().split('T')[0],
        qrImage,
        status: 'Approval Sukses'
    };

    db.get('faktur').push(dataBaru).write();
    res.redirect('/');
});

// 4. Hapus Faktur
app.get('/hapus/:id', (req, res) => {
    db.get('faktur').remove({ id: req.params.id }).write();
    res.redirect('/');
});

app.listen(3000, () => console.log('Sistem e-Faktur Aktif di Pelabuhan 3000'));
