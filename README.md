#  Ontology Mobile Learning App

A smart and adaptive English learning mobile app built with **React Native**, powered by **Ontology-based knowledge modeling** for personalized, semantic-driven learning paths.

##  About the Project

This app is designed to help users learn English through dynamically generated content and personalized study paths derived from an ontology of linguistic concepts, grammar rules, and vocabulary relationships.

Key features include:

- ✅ React Native frontend (Android/iOS compatible)
- ✅ Ontology-powered backend API (SPARQL-ready)
- ✅ Dynamic lesson generation based on learning goals
- ✅ Intelligent vocabulary recommendations
- ✅ Support for audio, interactive quizzes, and spaced repetition

---

## ⚙️ Tech Stack

### Frontend (React Native)
- Expo / React Native CLI
- AsyncStorage for local caching
- RESTful API integration
- React Navigation

### Backend (Ontology API)
- Node.js with Express
- Ontology in OWL or RDF format
- RDF/OWL parsing using libraries like `rdflib`, `n3`, or `owlready2`
- SPARQL endpoint for querying knowledge graphs

---

##  Ontology Design

The ontology is structured to capture:
- Grammar structures
- Word relationships (synonyms, antonyms, categories)
- CEFR levels (A1–C2)
- Usage contexts (business, travel, academic)

All learning content is generated or recommended based on relationships within the ontology.

---

##  Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/korobe0906/Ontology-mobile-app.git
cd Ontology-mobile-app
