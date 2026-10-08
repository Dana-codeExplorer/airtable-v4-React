import React from 'react';

const AboutMe = () => {
  const name = 'Dana Reynolds';
  const age = 61;
  const hobbies = ['Walking on the beach', 'Furniture refinishing', 'Crafting', 'Upcycling'];
  const skills = ['JavaScript', 'React', 'HTML', 'CSS', 'Node.js'];

  return (
    <section style={styles.container}>
      <h1 style={styles.heading}>About Me</h1>
      <p>
        My name is {name}. I am a {age}-year-old web developer who is currently building
        applications using React and Visual Studio Code. I enjoy creating websites that are
        both beautiful and beneficial. I currently live in Wilmington, NC. I am married and
        have two adult children.
      </p>

      <div style={styles.section}>
        <h3>When I am not coding, I enjoy the following hobbies:</h3>
        <ul style={styles.hobbiesList}>
          {hobbies.map((hobby, index) => (
            <li key={index} style={styles.hobbyItem}>{hobby}</li>
          ))}
        </ul>
      </div>

      <div style={styles.section}>
        <h3>My Skills</h3>
        <ul style={styles.skillsList}>
          {skills.map((skill, index) => (
            <li key={index} style={styles.skillItem}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
/*js object for styles*/
const styles = {
  container: {
    padding: '40px 20px',
    maxWidth: '800px',
    margin: '0 auto',
    color: '#ADD8E6'
  },
  heading: {
    borderBottom: '2px solid #000080',
    paddingBottom: '10px'
  },
  section: {
    marginTop: '30px'
  },
  hobbiesList: {
    listStyleType: 'none',
    paddingLeft: 0,
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap'
  },
  hobbyItem: {
    background: '#FFFDD0',
    border: '3px solid #000080',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontStyle: 'italic'
  },
  skillsList: {
    listStyleType: 'none',
    paddingLeft: 0,
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap'
  },
  skillItem: {
    background: 'aquamarine',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontStyle: 'italic'
  }
};

export default AboutMe;