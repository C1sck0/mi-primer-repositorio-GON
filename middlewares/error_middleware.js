export default function errorMiddleware(err, req, res, next) {
    console.error(err);
    res.json({ error: err.message });
} 