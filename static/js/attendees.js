//
//
// This js is not working when loaded in the header of attendees.css 
//
//



// Fetch and populate table from Google Sheets
async function loadParticipants() {
    const spreadsheetId = '1Mj9umsd-U_GgM2eeA1lodPRG999AkykiiPhRxODz-_0';
    const rangeName = 'A2:G'; // Adjust the range to match your data
    const apiKey = 'AIzaSyBBJrEbbMahFEH_7tb5qVCMxWcxGSTxLg4'; // Replace with your actual API key
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${rangeName}?key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log('Data loaded:', data);

        if (!data.values) {
            console.error('No data found.');
            return;
        }

        const tableBody = document.getElementById('participantsTableBody');
        tableBody.innerHTML = ''; // Clear existing rows

        data.values.forEach(row => {
            const [date, name, email, position, institute, source, comments] = row;
            const participantRole = position ? position.toLowerCase() : 'other';

            const tr = document.createElement('tr');
            tr.setAttribute('data-role', participantRole);

            tr.innerHTML = `
                <td>${name || 'Unknown'}</td>
                <td>${position || 'Unknown'}</td>
                <td>${institute || 'Unknown'}</td>
            `;

                // <td>${domain || 'Not Specified'}</td>

            tableBody.appendChild(tr);
        });

        updateStats();
    } catch (err) {
        console.error('Error loading participants:', err);
    }
}

// Update statistics
function updateStats() {
    const rows = document.querySelectorAll('#participantsTableBody tr');
    const stats = {
        total: rows.length,
        student: 0,
        faculty: 0,
        postdoc: 0,
        other: 0,
    };

    rows.forEach(row => {
        const role = row.getAttribute('data-role');
        if (stats.hasOwnProperty(role)) {
            stats[role]++;
        } else {
            stats.other++;
        }
    });

    document.getElementById('totalCount').textContent = stats.total;
    document.getElementById('studentCount').textContent = stats.student;
    document.getElementById('facultyCount').textContent = stats.faculty;
    document.getElementById('postdocCount').textContent = stats.postdoc;
}

// Search functionality
document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const rows = document.querySelectorAll('#participantsTableBody tr');

    rows.forEach(row => {
        const name = row.querySelector('td').textContent.toLowerCase();
        row.style.display = name.includes(searchTerm) ? '' : 'none';
    });
});

// Filter functionality
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        const role = this.getAttribute('data-role');
        const rows = document.querySelectorAll('#participantsTableBody tr');

        rows.forEach(row => {
            row.style.display = role === 'all' || row.getAttribute('data-role') === role ? '' : 'none';
        });
    });
});

// Initialize the application
loadParticipants();
