const Resume = () => {
  const name = "Eze Onyedikachi Eze";

  return (
    <div className="resume">
      <div className="biodata">
        <img src="passport.jpg" alt="passport.jpg" height="200" />
        <div className="biodata-details">
          <h2>{name}</h2>
          <p>Front End Dveloper and Digital Marketer</p>
          <p>
            A respectful self-motivator gifted at finding reliable solutions for
            software issues.
          </p>
        </div>
      </div>

      <div className="profile">
        <div className="profile-details">
          <i class="far fa-envelope"></i>
          <p>oeze609@gmail.com</p>
          <i class="fas fa-phone-alt"></i>
          <p>+2348134490002</p>
          <i class="fab fa-linkedin"></i>
          <p>
            <a href="https://linkedin.com/eze-eze-a0939418b">
              linkedin.com/eze-eze-a0939418b
            </a>
          </p>
        </div>
        <div className="skills">
          <h3>SKILLS SUMMARY</h3>
          <p>Software Development:</p>
          <li>
            Collaboration with other developers to alleviate the number of bugs
            in a software.
          </li>
          <li>Writing clean, clear and well-tested code for minor projects.</li>
          <li>
            Managed a 3-team developer and resolution of software difficulties.
          </li>
          <p>Search Engine Optimation:</p>
          <li>
            Recommendedations on changes to website architecture, content and
            linking to improve SEO positions for target keywords.
          </li>
          <li>
            Worked as part of a 3-person team to develop innovative branded
            marketing collateral for use by the sales team.
          </li>
        </div>
      </div>

      <div className="certification">
        <div className="competency">
          <h4>COMPETENCIES</h4>
          <p>Kindness, Empathy, Patience</p>
          <p>Positive Attitude, Active Listening</p>
          <p>Productive, Teaching</p>
        </div>
        <div className="certification-details">
          <h3>AWARDS / CERTIFICATIONS</h3>
          <p>
            <a href="https://internship.zuri.team/">
              <img src="zuri.svg" alt="zuri" height="20" />
            </a>
          </p>
          <p>
            <a href="https://academy.yoast.com/certificate/2558/947236/bfcb9ed6909ad267ee70d27f43ee0a33/1/">
              <img src="yoast.jpg" alt="yoast certificate" height="30" />
            </a>
          </p>
          <p>
            <a href="https://static.semrush.com/academy-prod/certificate/8276692/SEMrush-Academy-Certificate-cf2fde9baded3830e62c5f9cf429096e1b201ef93e8b10a89b0746d9d8de37bc.png">
              <img
                src="semrush-academy.png"
                alt="semrush certificate"
                height="30"
              />
            </a>
          </p>
        </div>
      </div>

      <div className="education">
        <div className="education-details">
          <h3>EDUCATION</h3>
          <p>
            Federal University of Tecnology Owerri
            <em> From September 2015 to August 2021</em>
          </p>
          <p>
            KIngs High School Enugu, Nigeria
            <em> From September 2008 to August 2014</em>
          </p>
        </div>
      </div>

      <div className="education">
        <div className="education-details">
          <h3>PROFESSIONAL EXPERIENCE</h3>
          <p>
            Search Engine Optimization Specialist at iValue Media - January 2020
            to Present
          </p>
          <p>
            Teacher Partner at LightGates Educational - October 2020 - April
            2021
          </p>
          <p>
            ICT Instructor at Pinnacle of Grace International School October
            2020 - April 2021
          </p>
          <p>
            Junior Front End Developer at Complustech - Jun 2019 to January 2020
          </p>
        </div>
      </div>

      <footer>Copyright &copy; Code Illustrator. 2021 </footer>
    </div>
  );
};

export default Resume;
