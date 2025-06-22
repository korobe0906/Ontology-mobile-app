const express = require("express");
const bodyParser = require("body-parser");
const SparqlClient = require("sparql-client-2").SparqlClient;
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

// Cấu hình endpoint của Apache Jena Fuseki
const FUSEKI_ENDPOINT = "http://localhost:3030/ontology/query"; // Thêm /query vào cuối

// Kết nối với Apache Jena
const client = new SparqlClient(FUSEKI_ENDPOINT)
  .register({
    rdfs: "http://www.w3.org/2000/01/rdf-schema#",
  });

// API để lấy từ vựng
app.get("/words", async (req, res) => {
  const query = `
    PREFIX : <http://example.org/language-learning#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

    SELECT ?word ?label WHERE {
      ?word a :Vocabulary ;
            rdfs:label ?label .
    }
  `;

  try {
    const result = await client.query(query).execute();
    console.log(result); // Debug log
    res.json(result.results.bindings);
  } catch (err) {
    console.error("SPARQL Query Error:", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Ontology API đang chạy trên http://localhost:${PORT}`);
});
