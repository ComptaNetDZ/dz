// Script pour ouvrir et fermer la fenêtre modale
function openModal(serviceId) {
    const descriptions = {
        service1: {
            title: "Comptabilité Générale",
            description: `
                <ul>
                    <li>Gestion des écritures comptables : enregistrement des opérations.</li>
                    <li>Production des bilans et comptes de résultats.</li>
                    <li>Contrôle et révision des comptes pour une fiabilité maximale.</li>
                </ul>`
        },
        service2: {
            title: "Déclarations Fiscales",
            description: `
                <ul>
                    <li>Préparation et soumission des déclarations fiscales (TVA, IBS, IRG).</li>
                    <li>Conseil en optimisation fiscale pour réduire les charges.</li>
                    <li>Suivi des mises à jour réglementaires pour rester en conformité.</li>
                </ul>`
        },
        service3: {
            title: "Gestion de Paie",
            description: `
                <ul>
                    <li>Calcul et établissement des bulletins de paie.</li>
                    <li>Déclarations sociales et gestion des cotisations (CNAS/CACOBAPTH).</li>
                    <li>Suivi des congés et absences, ainsi que des retenues salariales.</li>
                    <li>Suivi des livres légaux.</li>
                </ul>`
        },
        service4: {
            title: "Consultation Fiscale",
            description: `
                <ul>
                    <li>Analyse et conseils pour optimiser la fiscalité de votre entreprise.</li>
                    <li>Assistance lors des contrôles fiscaux.</li>
                    <li>Planification et stratégies fiscales sur le long terme.</li>
                </ul>`
        },
        service5: {
            title: "Assistance aux Startups",
            description: `
                <ul>
                    <li>Élaboration d’un business plan complet et adapté.</li>
                    <li>Étude financière pour évaluer la rentabilité et les besoins.</li>
                    <li>Conseil en structuration financière et juridique.</li>
                </ul>`
        },
        service6: {
            title: "Audit Comptable",
            description: `
                <ul>
                    <li>Vérification des comptes pour garantir la transparence financière.</li>
                    <li>Contrôle interne pour identifier les risques et améliorer la gestion.</li>
                    <li>Rapport d’audit détaillé pour des actions correctives.</li>
                </ul>`
        },
        service7: {
            title: "Formation Comptable",
            description: `
                <ul>
                    <li>Formation en comptabilité générale pour maîtriser les bases.</li>
                    <li>Ateliers pratiques sur les déclarations fiscales et gestion de paie.</li>
                    <li>Formation en logiciels PC-PAIE PC-COMPTA.</li>
                </ul>`
        }
    };

    document.getElementById("modal-title").innerHTML = descriptions[serviceId].title;
    document.getElementById("modal-description").innerHTML = descriptions[serviceId].description;
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

