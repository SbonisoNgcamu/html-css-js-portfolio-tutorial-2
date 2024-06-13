
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  document.addEventListener("DOMContentLoaded", function() {
    const textContainer = document.querySelector('.text');
    const textContent = `As a graduate in training as a Full-Stack software developer, I bring a strong foundation in
    programming languages, software development methodologies, and a passion for creating innovative solutions.
    With 6 months of hands-on experience in software development, I am excited to continue growing and contributing to
    the success of organizations in the tech industry. My experience in programming languages such as Java,
    Python, C# and C++ has equipped me with a solid technical skillset, and I am eager to expand my expertise
    in modern web development technologies like HTML, CSS, and JavaScript. I have a keen interest in cloud-based
    technologies like AWS and Azure, and I am familiar with version control systems like Git. I have also developed proficiency 
    in database management systems like SQL, SQL Server and NoSQL. As a full-stack developer, I am well-versed in both front-end 
    and back-end development, and I am excited to work on projects that integrate my skills in UI/UX design, API development, 
    and data management. With a strong work ethic and a passion for continuous learning, I am always looking for opportunities to 
    improve my skills and stay up-to-date with industry trends. I thrive in collaborative environments and possess excellent communication 
    skills, allowing me to effectively interact with stakeholders at all levels. As I continue my journey as a software developer, I am eager 
    to contribute my technical expertise, problem-solving abilities, and enthusiasm to drive innovation and deliver impactful solutions. I am 
    open to opportunities in software development, where I can continue to grow professionally and make a meaningful impact in the tech industry.`;

    const words = textContent.split(' ');
    let wordIndex = 0;

    function typeWord() {
        if (wordIndex < words.length) {
            textContainer.textContent += words[wordIndex] + ' ';
            wordIndex++;
            setTimeout(typeWord, 200); // Adjust the speed here (in milliseconds)
        }
    }

    typeWord();
});
