import Author from '../models/authorsModel.js'

export const list = async (req, res) => {
    try {
        const items = await Author.find()
        res.json(items)
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve authors.' })
    }
}

export const get = async (req, res) => {
    try {
        const item = await Author.findById(req.params.id)
        if (!item) return res.status(404).json({ error: 'Author not found.' })
        res.json(item)
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve the author.' })
    }
}

export const create = async (req, res) => {
    try {
        const created = await Author.create(req.body)
        res.status(201).json(created)
    } catch (err) {
        res.status(500).json({ error: 'Failed to create the author.' })
    }
}

export const update = async (req, res) => {
    try {
        const updated = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!updated) return res.status(404).json({ error: 'Author not found.' })
        res.json(updated)
    } catch (err) {
        res.status(500).json({ error: 'Failed to update the author.' })
    }
}

export const remove = async (req, res) => {
    try {
        const deleted = await Author.findByIdAndDelete(req.params.id)
        if (!deleted) return res.status(404).json({ error: 'Author not found.' })
        res.status(204).end()
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete the author.' })
    }
}