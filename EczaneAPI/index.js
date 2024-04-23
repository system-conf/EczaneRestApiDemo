const express = require('express');
const app = express();
const PORT = 3000;

// Eczane verileri
const eczaneler = [
    { id: 1, ad: 'Örnek Eczane 1', adres: 'Örnek Adres 1', telefon: '1234567890' },
    { id: 2, ad: 'Örnek Eczane 2', adres: 'Örnek Adres 2', telefon: '0987654321' }
];

// Tüm eczaneleri getir
app.get('/eczaneler', (req, res) => {
    res.json(eczaneler);
});

// Belirli bir eczane id'sine göre getir
app.get('/eczaneler/:id', (req, res) => {
    const eczane = eczaneler.find(e => e.id === parseInt(req.params.id));
    if (!eczane) {
        res.status(404).json({ message: 'Eczane bulunamadı' });
    } else {
        res.json(eczane);
    }
});

app.listen(PORT, () => {
    console.log(`Server ${PORT} portunda başlatıldı.`);
});
