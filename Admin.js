// Admin Panel JavaScript
document.addEventListener('DOMContentLoaded', function() {
    if (!document.querySelector('.admin-page')) return;
    
    // Load admin stats
    loadAdminStats();
    
    // Load recent registrations
    loadRecentRegistrations();
    
    // Load upcoming events table
    loadUpcomingEventsTable();
    
    // Setup event modal
    setupEventModal();
});

// Load admin stats
function loadAdminStats() {
    document.getElementById('upcoming-events').textContent = eventsData.length;
    
    // Calculate total registrations (simulated)
    const totalRegistrations = eventsData.reduce((sum, event) => sum + event.registered, 0);
    document.getElementById('total-registrations').textContent = totalRegistrations;
    
    // Calculate active members (simulated)
    const activeMembers = Object.values(teamData).flat().length;
    document.getElementById('active-members').textContent = activeMembers;
    
    // Random new messages (simulated)
    document.getElementById('new-messages').textContent = Math.floor(Math.random() * 10);
}

// Load recent registrations
function loadRecentRegistrations() {
    const tbody = document.getElementById('recent-registrations');
    
    // Simulated recent registrations
    const recentRegistrations = [
        { name: "Muhammad Zakwan Haikal bin Mohd Zamri", event: "Web Development Workshop", date: "2023-11-10", status: "Confirmed" },
        { name: "Muhammad Fayz Reza bin Abdel Rezani", event: "Data Science Seminar", date: "2023-11-08", status: "Confirmed" },
        { name: "muhammad khairil haziq bin muhammad rizal", event: "Networking Mixer", date: "2023-11-05", status: "Pending" },
        { name: "amirul danish hakimi bin abdul mutalib", event: "Web Development Workshop", date: "2023-11-04", status: "Confirmed" },
        { name: "mohamad jamaludin siregar bin mohamad ismail ", event: "Data Science Seminar", date: "2023-11-03", status: "Confirmed" }
    ];
    
    recentRegistrations.forEach(reg => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${reg.name}</td>
            <td>${reg.event}</td>
            <td>${formatDate(reg.date)}</td>
            <td><span class="status-badge ${reg.status.toLowerCase()}">${reg.status}</span></td>
        `;
        tbody.appendChild(tr);
    });
}

// Load upcoming events table
function loadUpcomingEventsTable() {
    const tbody = document.getElementById('upcoming-events-table');
    
    eventsData.forEach(event => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${event.title}</td>
            <td>${formatDate(event.date)}</td>
            <td>${event.registered}/${event.seats}</td>
            <td>
                <button class="action-button edit"><i class="fas fa-edit"></i></button>
                <button class="action-button delete"><i class="fas fa-trash"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Setup event modal
function setupEventModal() {
    const modal = document.getElementById('eventModal');
    const addEventBtn = document.getElementById('add-event-btn');
    const closeModal = document.querySelector('.close-modal');
    const cancelButton = document.querySelector('.cancel-button');
    
    if (addEventBtn) {
        addEventBtn.addEventListener('click', function() {
            modal.style.display = 'flex';
        });
    }
    
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    if (cancelButton) {
        cancelButton.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Form submission
    const eventForm = document.getElementById('eventForm');
    if (eventForm) {
        eventForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real app, you would save this event data
            const formData = new FormData(eventForm);
            const eventData = Object.fromEntries(formData.entries());
            
            console.log('New event created:', eventData);
            
            // Close modal and reset form
            modal.style.display = 'none';
            eventForm.reset();
            
            // Refresh events table (in a real app, you would update the UI)
            alert('Event created successfully!');
        });
    }
}

// Format date (reused from main.js)
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}
