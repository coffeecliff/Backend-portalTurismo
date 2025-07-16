const Contact = require('../models/contact');

exports.createContact = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
        }

        const contact = await Contact.create({ name, email, message });
        res.status(201).json(contact);
    } catch (error) {
        res.status(500).json({ message: 'Erro interno do servidor.', error });
    }
}


exports.listContacts = async (_req, res) => {
    try {
        const contacts = await Contact.findAll();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: 'Erro interno do servidor.', error });
    }
}