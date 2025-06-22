const express = require('express');
const { exec } = require('child_process');

const app = express();
const PORT = 3000;

// API lấy danh sách từ vựng trong bài học
app.get('/api/lesson/:id', (req, res) => {
    const lessonId = req.params.id;
    const query = `
        PREFIX ex: <http://example.org/language-learning#>
        SELECT ?vocabLabel WHERE {
            ex:${lessonId} ex:hasVocabulary ?vocab .
            ?vocab rdfs:label ?vocabLabel .
        }
    `;

    exec(`sparql --query='${query}' --data=language_learning.owl`, (error, stdout) => {
        if (error) {
            res.status(500).send("Lỗi truy vấn ontology");
            return;
        }
        res.json({ vocabulary: stdout.trim().split("\n") });
    });
});

app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});