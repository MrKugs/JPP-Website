// Sample data for the application
const eventsData = [
    {
        id: 1,
        title: "Web Development Workshop",
        date: "2023-11-15",
        time: "10:00 AM - 2:00 PM",
        location: "DEWAN KULIA UTAMA (DKU)",
        description: "Learn the fundamentals of web development including HTML, CSS, and JavaScript. This workshop is perfect for beginners looking to start their journey in web development.",
        image: "image.1.png",
        seats: 30,
        registered: 24,
        schedule: [
            { time: "10:00 AM", activity: "Introduction to Web Development" },
            { time: "11:00 AM", activity: "HTML Basics" },
            { time: "12:00 PM", activity: "Lunch Break" },
            { time: "1:00 PM", activity: "CSS Styling" },
            { time: "2:00 PM", activity: "JavaScript Fundamentals" }
        ],
        speakers: [
            { name: "PUAN SHARDILLA BINTI MOHAMAD SARIF", role: "Senior Web Developer",image: "Shardilla.png"  },
            { name: "MOHD ZAIDIL ADHA BIN MAT HUSSIN ", role: "Frontend Specialist",image:"MohdZaidilAdha.png"  }
        ]
    },
    {
        id: 2,
        title: "Data Science Seminar",
        date: "2023-11-20",
        time: "3:00 PM - 5:00 PM",
        location: "BILIK KULIA 1 (BK1)",
        description: "Explore the world of data science and machine learning. This seminar will cover basic concepts and real-world applications of data analysis.",
        image: "image 2.jpg",
        seats: 100,
        registered: 78,
        schedule: [
            { time: "3:00 PM", activity: "Introduction to Data Science" },
            { time: "3:30 PM", activity: "Data Visualization" },
            { time: "4:00 PM", activity: "Machine Learning Basics" },
            { time: "4:30 PM", activity: "Case Studies" },
            { time: "5:00 PM", activity: "Q&A Session" }
        ],
        speakers: [
            { name: "PUAN NORSHAHIDAYU BINTI OTHMAN", role: "Data Scientist",image:"Norshahidayu.png"   },
            { name: "PUAN MASTURINA NATALIA BINTI MOHD ", role: "AI Researcher",image:"MasturinaNatalia.png"   }
        ]
    },
    {
        id: 3,
        title: "Networking Mixer",
        date: "2023-05-22",
        time: "2:00 PM - 4:00 PM",
        location: "BILIK MULTIMEDIA ",
        description: "Connect with professionals and fellow students in a relaxed networking environment. Great opportunity to expand your professional network.",
        image: "IMAGE 3.PNG.png",
        seats: 150,
        registered: 112,
        schedule: [
            { time: "2:00 PM", activity: "Welcome Reception" },
            { time: "2:30 PM", activity: "Speed Networking" },
            { time: "3:00 PM", activity: "Panel Discussion" },
            { time: "4:00 PM", activity: "Open Networking" }
        ],
        speakers: [
            { name: "PUAN SITI NAZILAH BINTI HAMZAH", role: "Career Counselor",image:"SitiNazilah.png"  } ,
            { name: "SHOBHANAMBIGHA A/P SIVAGURU ", role: "HR Manager",image:"Shobhanambigha_new.png"  }
        ]
    }
];

const teamData ={
    executive: [
        { id: 1, name: "MUHAMMAD SYFUL AZVEEN BIN MUHAMMAD JOSEPH", role: "YANG DI PERTUA", bio: "Senior Computer Science major with a passion for leadership and technology.", image: "image 4.png", social: { linkedin: "#", twitter: "#" } },
        { id: 2, name: " ALI RIDHA BIN ISMAILY", role: " TIMBALAN YANG DI PERTUA", bio: "Business Administration major focusing on organizational management.", image: "image 5.png", social: { linkedin: "#", twitter: "#" } }
    ],
    technical: [
        { id: 3, name: "MUHAMMAD SHAHIDI SHAHMI BIN MAHADIR ", role: "NAIB YANG DI PERTUA (KEBAJIKAN)", bio: "Computer Engineering major specializing in web development.", image: "image 6.png", social: { linkedin: "#", twitter: "#" } },
        { id: 4, name: "VIBHUSHAN A/L MUTHURAMU ", role: "NAIB YANG DI PERTUA (AKADEMIK)", bio: "Software Engineering major with experience in mobile apps.", image: "image 7.png", social: { linkedin: "#", twitter: "#" } }
    ],
    marketing: [
        { id: 5, name: "MUHAMMAD FAKRUL NAIM  BIN JAAFAR", role: " SETIAUSAHA KEHORMAT", bio: "Marketing major with a focus on digital media strategies.", image: "image 8.png", social: { linkedin: "#", twitter: "#" } },
        { id: 6, name: "YASOTHAA A/P SHANMUGA LINGAM ", role: "NAIB SETIAUSAHA KEHORMAT", bio: "Graphic Design major creating visual content for our events.", image: "image 9.png", social: { linkedin: "#", twitter: "#" } }
    ],
    logistics: [
        { id: 7, name: "MUHAMMAD HAIKAL BIN  MOHD FAIZUL", role: " BENDAHARI KEHORMAT", bio: "Operations Management major handling event planning and execution.", image: "image 10.png", social: { linkedin: "#", twitter: "#" } },
        { id: 8, name: "NURFAZURIN ALIA BINTI MOHAMMAD FAUZI ", role: "NAIB BENDAHARI KEHORMAT", bio: "Ensuring all our events have the perfect venue and setup.", image: "image 11.png", social: { linkedin: "#", twitter: "#" } }
    ]
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load events on homepage
    if (document.querySelector('.events-grid')) {
        loadEvents();
    }
    
    // Load event details if on event page
    if (document.querySelector('.event-details')) {
        const urlParams = new URLSearchParams(window.location.search);
        const eventId = urlParams.get('id');
        loadEventDetails(eventId);
    }
    
    // Load team members if on organization page
    if (document.querySelector('.team-members')) {
        loadTeamMembers('executive');
        setupTeamTabs();
    }
    
    // Setup registration form if on registration page
    if (document.getElementById('registrationForm')) {
        setupRegistrationForm();
        loadEventOptions();
        loadSidebarEvents();
    }
    
    // Setup mobile menu toggle
    setupMobileMenu();
    
    // Setup scroll animations
    setupScrollAnimations();
    
    // Setup modal if exists
    setupModal();
});

// Load events on homepage
function loadEvents() {
    const eventsGrid = document.querySelector('.events-grid');
    
    eventsData.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card slide-up';
        eventCard.innerHTML = `
            <div class="event-image">
                <img src="${event.image}" alt="${event.title}">
            </div>
            <div class="event-content">
                <span class="event-date">${formatDate(event.date)}</span>
                <h3 class="event-title">${event.title}</h3>
                <p class="event-description">${event.description}</p>
                <div class="event-meta">
                    <span><i class="fas fa-map-marker-alt"></i> ${event.location}</span>
                    <span><i class="fas fa-users"></i> ${event.registered}/${event.seats}</span>
                </div>
                <a href="event.html?id=${event.id}" class="cta-button">View Details</a>
            </div>
        `;
        eventsGrid.appendChild(eventCard);
    });
}

// Load event details
function loadEventDetails(eventId) {
    const event = eventsData.find(e => e.id === parseInt(eventId));
    if (!event) return;
    
    // Set hero image and title
    const eventHero = document.querySelector('.event-hero');
    eventHero.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${event.image}')`;
    
    document.getElementById('event-title').textContent = event.title;
    document.getElementById('event-date').textContent = `${formatDate(event.date)} at ${event.time}`;
    document.getElementById('event-location').textContent = event.location;
    document.getElementById('event-description').textContent = event.description;
    
    // Load schedule
    const scheduleList = document.getElementById('event-schedule');
    event.schedule.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${item.time}</strong> - ${item.activity}`;
        scheduleList.appendChild(li);
    });
    
    // Load speakers
    const speakersGrid = document.getElementById('event-speakers');
    event.speakers.forEach(speaker => {
        const speakerCard = document.createElement('div');
        speakerCard.className = 'speaker-card';
        speakerCard.innerHTML = `
            <div class="speaker-image">
                <img src="${speaker.image}" alt="${speaker.name}">
            </div>
            <h4 class="speaker-name">${speaker.name}</h4>
            <p class="speaker-role">${speaker.role}</p>
        `;
        speakersGrid.appendChild(speakerCard);
    });
    
    // Set sidebar details
    document.getElementById('sidebar-date').textContent = formatDate(event.date);
    document.getElementById('sidebar-time').textContent = event.time;
    document.getElementById('sidebar-location').textContent = event.location;
    document.getElementById('sidebar-seats').textContent = `${event.seats - event.registered} seats available`;
}

// Load team members
function loadTeamMembers(team) {
    const teamMembersContainer = document.querySelector('.team-members');
    teamMembersContainer.innerHTML = '';
    
    teamData[team].forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'member-card slide-up';
        memberCard.innerHTML = `
            <div class="member-image">
                <img src="${member.image}" alt="${member.name}">
            </div>
            <h3 class="member-name">${member.name}</h3>
            <p class="member-role">${member.role}</p>
            <p class="member-bio">${member.bio}</p>
            <div class="social-links">
                <a href="${member.social.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a href="${member.social.twitter}" target="_blank"><i class="fab fa-twitter"></i></a>
            </div>
        `;
        teamMembersContainer.appendChild(memberCard);
    });
}

// Setup team tabs
function setupTeamTabs() {
    const tabs = document.querySelectorAll('.tab-button');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Load team members for selected tab
            const team = this.getAttribute('data-team');
            loadTeamMembers(team);
        });
    });
}

// Setup registration form
function setupRegistrationForm() {
    const form = document.getElementById('registrationForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Form validation
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }
        
        // In a real app, you would send this data to a server
        const formData = new FormData(form);
        const registration = Object.fromEntries(formData.entries());
        
        console.log('Registration submitted:', registration);
        
        // Show success modal
        document.getElementById('successModal').style.display = 'flex';
    });
}

// Load event options in registration form
function loadEventOptions() {
    const eventSelect = document.getElementById('event');
    
    eventsData.forEach(event => {
        const option = document.createElement('option');
        option.value = event.id;
        option.textContent = `${event.title} - ${formatDate(event.date)}`;
        eventSelect.appendChild(option);
    });
}

// Load events in sidebar
function loadSidebarEvents() {
    const sidebarEvents = document.getElementById('sidebar-events');
    
    // Show only 3 upcoming events
    const upcomingEvents = eventsData.slice(0, 3);
    
    upcomingEvents.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.className = 'sidebar-event';
        eventItem.innerHTML = `
            <h4>${event.title}</h4>
            <p><i class="fas fa-calendar-alt"></i> ${formatDate(event.date)}</p>
            <a href="event.html?id=${event.id}" class="small-button">Details</a>
        `;
        sidebarEvents.appendChild(eventItem);
    });
}

// Setup mobile menu toggle
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
}

// Setup scroll animations
function setupScrollAnimations() {
    const animateElements = document.querySelectorAll('[data-animate]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// Setup modal
function setupModal() {
    const modal = document.getElementById('successModal');
    if (!modal) return;
    
    const closeModal = document.querySelector('.close-modal');
    const modalButton = document.querySelector('.modal-button');
    
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    modalButton.addEventListener('click', function() {
        modal.style.display = 'none';
        window.location.href = 'index.html';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}