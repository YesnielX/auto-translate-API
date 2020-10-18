module.exports = async (req, res, bot) => {
    res.status(200).json(bot.getGuildsAndUsers());
}