const fs = require('fs').promises;
const { asyncHandler } = require("../utils");

module.exports = {
    getAll: asyncHandler(async (req, res, next) => {
        try {
            const accountsJson = JSON.parse(await fs.readFile('./data/accounts.json'));
            if (!accountsJson) throw new Error('Error reading file.');

            res.json(accountsJson);

        } catch(e) {
            next(e);
        }        
    }),
    getSpecific: asyncHandler(async (req, res, next) => {
        try {
            const { accountId } = req.params;
            if (!accountId) throw new Error('No accountId provided');

            const accountsJson = JSON.parse(await fs.readFile('./data/accounts.json'));
            const account = accountsJson.find(account => account.id == accountId);

            if (!account) throw new Error('Account not found');

            res.json(account);
        } catch(e) {
            next(e);
        }
    })
}