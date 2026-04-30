# AI Logs

## AI Log 1

- Goal: Create a layout structure and basic interface for the e-portfolio.

- Prompt:
“Please create a personal website with the following sections: About Me, Skills, Projects, Contact, and AI Reflection using HTML and CSS.”

- AI Response Summary:
The AI guided me to test the website in a browser, add my personal content (name, skills, projects), and consider improving the design by adjusting the color theme.

- Output: Website source code (Iteration 1): index.html_v1

## AI Log 2: Add Detailed Content

- Goal: Confirm the design style and prepare for content integration.

- Prompt:
“The interface is good. I prefer it simple, not flashy but effective. Prepare it so I can add my personal content.”

- AI Response Summary:
The AI agreed with the minimalist design approach and provided guidance for integrating content.

- What learned:
A simple interface improves usability and enhances user experience.

## AI Log 3

- Goal: Add real personal content (Bio, Education, Projects) to the website.

- Prompt:
“Here is my personal information (Name, About Me, Education, Projects, Contact). Please update it in the code and keep the minimalist style.”

- AI Response Summary:
The AI integrated the provided content into the correct HTML sections and improved the structure of the Projects section for better readability.

- What learned:
A clear information hierarchy helps highlight important projects (e.g., FOLI Pathfinding Visualizer).

- Output: Website source code (Iteration 2 – Content completed): index.html_v2

## AI Log 4

- Goal: Improve aesthetics and optimize usability.

- Prompt:
“The content is good now. Continue improving the website professionally. Use modern fonts, add smooth scrolling effects, and prepare space for a longer Reflection section.”

- AI Response Summary:
The AI enhanced the CSS using Google Fonts, added scroll-behavior: smooth, and improved the layout for the Reflection section.

- What learned:
How to use external CSS resources and basic UX features to create a more professional interface without changing content.

- Output: Website source code (Iteration 3 – UI upgrade): index.html_v3

## AI Log 5

- Goal: Split the website into separate pages to improve structure.

- Prompt:
“Split the current website into separate HTML files for each section while keeping a shared CSS style.”

- AI Response Summary:
The AI created multiple HTML files and a shared CSS file for consistency.

- What learned:
How to link pages using <a href="filename.html"> and the benefits of external CSS.

- Outputs:
style.css, index.html, education.html, projects.html, reflection.html, contact.html

## AI Log 6

- Goal: Diversify visual style and structure for each page.

- Prompt:
“Create separate HTML pages with unique features: About with an image, Projects with Health Tech icons, Reflection as a diary, Contact playful, Education split into courses and skills. Each page should have its own color theme.”

- AI Response Summary:
The AI designed a multi-theme system and optimized each page structure based on content type.

- What learned:
How to use CSS classes for flexible styling and present technical information clearly.

- Outputs:

    style.css (multi-theme system)
    index.html (About – Blue theme)
    education.html (Education – Orange theme)
    projects.html (Projects – Green theme)
    reflection.html (AI Reflection – Purple theme)
    contact.html (Contact – Pink theme)

  
## AI Log 7

- Goal: Integrate external learning resources into the Reflection page.

- Prompt:
“Update the AI Reflection page to include links to YouTube channels about AI knowledge while maintaining the diary style and purple theme.”

- AI Response Summary:
The AI added structured links with icons and explained how to embed hyperlinks in HTML.

- What learned:
How to integrate external resources and create a reference section for academic value.

- Output: Updated reflection.html

## AI Log 8

- Goal: Add school identity and internship experience.

- Prompt:
“Add the school logo and website link, and include an Internship section in the Education page. Clearly separate courses, skills, and internship.”

- AI Response Summary:
The AI demonstrated how to insert images, add external links, and structure internship information.

- What learned:
How to present internships alongside academic learning to create a balanced profile.

- Output: Updated education.html

## AI Log 9

- Goal: Add professional social media links.

- Prompt:
“Add GitHub and LinkedIn links to the Contact page. Make them visible and engaging.”

- AI Response Summary:
The AI redesigned the contact section with icons and interactive elements.

- What learned:
The importance of professional online presence and interactive UI elements.

- Output: Updated contact.html

## AI Log 10

- Goal: Add JavaScript interaction features.

- Prompt:
“Add JavaScript to the Contact page so that when the user clicks the Send button, it shows the message: ‘Thank you for connecting with Ann!’”

- AI Response Summary:
The AI provided a <script> and explained event handling using a button ID (sendBtn).

- What learned:
How JavaScript handles user interactions in the browser.

- Output: Updated contact.html

## AI Log 11

- Goal: Refactor the project into a modular structure.

- Prompt:
“I want the project divided into three components: templates, CSS, and JS.”

- AI Response Summary:
The AI guided folder restructuring and corrected relative paths.

- What learned:
How to organize code professionally by separating structure, style, and logic.

## AI Log 12

- Goal: Create a base template system (base.html).

- Prompt:
“Create a standard base.html so all pages follow a unified structure.”

- AI Response Summary:
The AI created a base template with shared navigation and layout and explained template inheritance.

- What learned:
The DRY principle (Don’t Repeat Yourself) to reduce duplication and errors.

## AI Log 13

- Goal: Improve UX with advanced JavaScript features.

- Prompt:
“I want to develop more JavaScript features.”

- AI Response Summary:
The AI implemented Dark Mode using LocalStorage and added smooth scrolling.

- What learned:
How JavaScript interacts with CSS and stores user preferences.

## AI Log 14

- Goal: Extend the project from a front-end application to a full-stack system using Flask.

- Prompt:
“Can I use a Flask API for this part?”

- AI Response Summary:
The AI confirmed feasibility, suggested a Flask project structure, and provided sample code for a BMI calculation API.

- What learned:
Understanding the client–server model and how Flask handles user requests.

## Debugging & Final Result

## AI Log 15

- Prompt: Bugs: No colors displayed on pages, check connection between html pages and style.css, 

- AI Response Summary:

    Cause (identified):
        Incorrect template structure
        Missing proper Flask static file linking
        Incorrect use of Jinja template inheritance (base.html)

## Resolution:
After fixing these issues, the e-portfolio became a functional web application. However, additional features are still required to develop it into a complete full-stack system.