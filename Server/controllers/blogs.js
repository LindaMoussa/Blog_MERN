const Blog = require("../model/blog");

const blogController = {};

blogController.create = async (req, res, next) => {

    const {
        title,
        body,
        tags
    } = req.body;
    const newBlog = newBlog({
        title,
        body,
        tags,
        author: req.user
    });
    try {
        const saved = await newBlog.save();
        return res.send({
            success: true,
            expense: saved
        })
    } catch (e) {
        next(e);
    }
};

blogController.getAll = async (req, res, next) => {
    try {
        const blog = await Blog.find();
        return res.send({
            blog
        })
    } catch (e) {
        next(e);
    }
}
blogController.getById = async (req, res, next) => {
    const {
        user
    } = req;
    const query = {
        author: user._id
    }
    try {
        const blog = await Blog.find(query);
        return res.send({
            blog
        })
    } catch (e) {
        next(e);
    }
}
blogController.update = async (req, res, next) => {
    const {
        title,
        body,
        tags
    } = req.body;
    const blog_id = req.params.expense_id;
    try {
        const check = await Blog.findOne({
            _id: expense_id
        });
        if (!check.author.equals(req.user._id)) {
            const err = new Error('This blog is not yours!');
            err.status = 401;
            throw err;
        }
        const blog = await Blog.update({
            _id: blog_id
        }, {
            title,
            body,
            tags
        })
        return res.send({
            success: true
        })
    } catch (e) {
        next(e);
    }
}
blogController.delete = async (req, res, next) => {

    const blog_id = req.params.expense_id;
    try {
        const check = await Blog.findOne({ _id: expense_id });
        if (!check.author.equals(req.user._id)) {
          const err = new Error('This blog is not yours!');
          err.status = 401;
          throw err;
        }
        await Blog.deleteOne({
            _id: blog_id
        });
        res.send({
            success: true
        })
    } catch (e) {
        next(e)
    }
}
module.exports = blogController;