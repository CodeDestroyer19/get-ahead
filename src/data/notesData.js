import ScrollableTabsButtonForce from "../components/Tabs";
import SimpleAccordion from "../components/Collapse";

const subjectNotes = {
  maths: {
    Term1: [
      { heading: "Full Text Book", body: <iframe src="https://drive.google.com/file/d/0B6pcGxi_-Y9PMVF1QmlFS3Q0c00/preview"></iframe>, style: {height: '500px', width: '100%'}},
      
    ],
    Term2: [
      { heading: "Nothing here", body: "" },

    ],
  },
  mathsLit: {
    Term1: [
      { heading: "Study Guide", body: <iframe src="https://drive.google.com/file/d/1GU0_eKGrJvrwGvqBKBVX3LbCIhUuy25B/preview"></iframe>, style: {height: '500px', width: '100%'}},
    ],
    Term2: [
      { heading: "Nothing here", body: "" },

    ],
  },
  lifeSciences: {
    Term1: [
      { heading: "Sequences and Series", body: "" },
      { heading: "Functions", body: "" },
      { heading: "Finance", body: "" },
      { heading: "Trigonometry", body: "" },
      { heading: "Eucliediean Geometry", body: "" },
    ],
    Term2: [
      { heading: "Nothing here", body: "" },

    ],
  },
  physics: {
    Term1: [
      { heading: "Full Text Book", body: <iframe src="https://drive.google.com/file/d/0B6pcGxi_-Y9PSlR5RWxfalQtNnc/preview" height="980"></iframe>, style: {height: '500px', width: '100%'} },

    ],
    Term2: [
      { heading: "Nothing here", body: "" },
      { heading: "Nothing here", body: "" },

    ],
  },
  tourism: {
    Term1: [
      { heading: "Sequences and Series", body: "" },
      { heading: "Functions", body: "" },
      { heading: "Finance", body: "" },
      { heading: "Trigonometry", body: "" },
      { heading: "Eucliediean Geometry", body: "" },
    ],
    Term2: [
      { heading: "Nothing here", body: "" },
      { heading: "Nothing here", body: "" },

    ],
  },
  cat: {
    Term1: [
      { heading: "Full Text Book", body: <iframe src="https://drive.google.com/file/d/1-HKZ7jUYJZtlXUEdI-LcL4bNcKezJkAE/preview"></iframe>, style: {height: '500px', width: '100%'} },
    ],
    Term2: [
      { heading: "Differential Calculus", body: "" },

    ],
  },
  afrikaans: {
    Term1: [
      { heading: "Sequences and Series", body: "" },
      { heading: "Functions", body: "" },
      { heading: "Finance", body: "" },
      { heading: "Trigonometry", body: "" },
      { heading: "Eucliediean Geometry", body: "" },
    ],
    Term2: [
      { heading: "Nothing here", body: "" },
      { heading: "Nothing here", body: "" },

    ],
  },
  economics: {
    Term1: [
      { heading: "Study Guide", body: <iframe src="https://drive.google.com/file/d/1GFiLn-fYkixW9jY2vPBPn9cC6AaNWRIl/preview"></iframe>, style: {height: '500px', width: '100%'} },
    ],
    Term2: [
      { heading: "Nothing here", body: "" },
      { heading: "Nothing here", body: "" },

    ],
  },
  businessStudies: {
    Term1: [
      { heading: "Study Guide", body: <iframe src="https://drive.google.com/file/d/1xLRmBdoiGwdWJykuAnSTfdZQ4gHAwWfh/preview"></iframe>, style: {height: '500px', width: '100%'} },

    ],
    Term2: [
      { heading: "Nothing here", body: "" },
      { heading: "Nothing here", body: "" },

    ],
  },
  accounting: {
    Term1: [
      { heading: "Sequences and Series", body: "" },
      { heading: "Functions", body: "" },
      { heading: "Finance", body: "" },
      { heading: "Trigonometry", body: "" },
      { heading: "Eucliediean Geometry", body: "" },
    ],
    Term2: [
      { heading: "Nothing here", body: "" },
      { heading: "Nothing here", body: "" },

    ],
  },
  geography: {
    Term1: [
      { heading: "Full Text Book", body: <iframe src="https://drive.google.com/file/d/1-AjEyCIS_ijtKy3WMPv4X5RqIikD707w/preview"></iframe>, style: {height: '500px', width: '100%'} },
    ],
    Term2: [
      { heading: "Differential Calculus", body: "" },

    ],
  },
  englishHl: {
    Term1: [
      { heading: "Sequences and Series", body: "" },
      { heading: "Functions", body: "" },
      { heading: "Finance", body: "" },
      { heading: "Trigonometry", body: "" },
      { heading: "Eucliediean Geometry", body: "" },
    ],
    Term2: [
      { heading: "Nothing here", body: "" },
      { heading: "Nothing here", body: "" },

    ],
  },
  englishFal: {
    Term1: [
      { heading: "Sequences and Series", body: "" },
      { heading: "Functions", body: "" },
      { heading: "Finance", body: "" },
      { heading: "Trigonometry", body: "" },
      { heading: "Eucliediean Geometry", body: "" },
    ],
    Term2: [
      { heading: "Nothing here", body: "" },
      { heading: "Nothing here", body: "" },

    ],
  },
  spediHome: {
    Term1: [
      { heading: "Sequences and Series", body: "" },
      { heading: "Functions", body: "" },
      { heading: "Finance", body: "" },
      { heading: "Trigonometry", body: "" },
      { heading: "Eucliediean Geometry", body: "" },
    ],
    Term2: [
      { heading: "Nothing here", body: "" },
      { heading: "Nothing here", body: "" },

    ],
  },
  zuluHome: {
    Term1: [
      { heading: "Sequences and Series", body: "" },
      { heading: "Functions", body: "" },
      { heading: "Finance", body: "" },
      { heading: "Trigonometry", body: "" },
      { heading: "Eucliediean Geometry", body: "" },
    ],
    Term2: [
      { heading: "Nothing here", body: "" },
      { heading: "Nothing here", body: "" },

    ],
  },
  history: {
    Term1: [
      { heading: "Sequences and Series", body: "" },
      { heading: "Functions", body: "" },
      { heading: "Finance", body: "" },
      { heading: "Trigonometry", body: "" },
      { heading: "Eucliediean Geometry", body: "" },
    ],
    Term2: [
      { heading: "Nothing here", body: "" },
      { heading: "Nothing here", body: "" },

    ],
  },
};

const Pp = [
  {
    sub: `MATHEMATICS`,
    Tab: (
      <ScrollableTabsButtonForce
        acc1={subjectNotes.maths.Term1.map(i => (
          <SimpleAccordion heading={i.heading} body={i.body} style={i.style} />
        ))}
        acc2={subjectNotes.maths.Term2.map(i => (
          <SimpleAccordion heading={i.heading} body={i.body} style={i.style} />
        ))}
      />
    ),
  },
  {
    sub: `MATHS LITERACY`,
    Tab: (
      <ScrollableTabsButtonForce
        acc1={subjectNotes.mathsLit.Term1.map(i => (
          <SimpleAccordion heading={i.heading} body={i.body} style={i.style}/>
        ))}
        acc2={subjectNotes.mathsLit.Term2.map(i => (
          <SimpleAccordion heading={i.heading} body={i.body} style={i.style} />
        ))}
      />
    ),
  },
  {
    sub: `LIFE SCIENCE`,
    Tab: (
      <ScrollableTabsButtonForce
        acc1={subjectNotes.maths.Term1.map(i => (
          <SimpleAccordion heading={i.heading} body={i.body} style={i.style}/>
        ))}
        acc2={subjectNotes.maths.Term2.map(i => (
          <SimpleAccordion heading={i.heading} body={i.body} style={i.style}/>
        ))}
      />
    ),
  },
  {
    sub: `PHYSICS`,
    Tab: (
      <ScrollableTabsButtonForce
        acc1={subjectNotes.physics.Term1.map(i => (
          <SimpleAccordion heading={i.heading} body={i.body} style={i.style} />
        ))}
        acc2={subjectNotes.maths.Term2.map(i => (
          <SimpleAccordion heading={i.heading} body={i.body} style={i.style}/>
        ))}
      />
    ),
  },
  {
    sub: `TOURISM`,
    Tab: (
      <ScrollableTabsButtonForce
        acc1={subjectNotes.maths.Term1.map(i => (
          <SimpleAccordion heading={i.heading} body={i.body} style={i.style} />
        ))}
        acc2={subjectNotes.maths.Term2.map(i => (
          <SimpleAccordion heading={i.heading} body={i.body} style={i.style} />
        ))}
      />
    ),
  },
  {
    sub: `CAT`,
    Tab: (
      <ScrollableTabsButtonForce
        acc1={subjectNotes.cat.Term1.map(i => (
          <SimpleAccordion heading={i.heading} body={i.body} style={i.style}/>
        ))}
        acc2={subjectNotes.cat.Term2.map(i => (
          <SimpleAccordion heading={i.heading} />
        ))}
      />
    ),
  },
  {
    sub: `AFRIKAANS`,
    Tab: (
      <ScrollableTabsButtonForce
        acc1={subjectNotes.maths.Term1.map(i => (
          <SimpleAccordion heading={i.heading} />
        ))}
        acc2={subjectNotes.maths.Term2.map(i => (
          <SimpleAccordion heading={i.heading} />
        ))}
      />
    ),
  },
  {
    sub: `ECONOMICS`,
    Tab: (
      <ScrollableTabsButtonForce
        acc1={subjectNotes.economics.Term1.map(i => (
          <SimpleAccordion heading={i.heading} body={i.body} style={i.style}/>
        ))}
        acc2={subjectNotes.economics.Term2.map(i => (
          <SimpleAccordion heading={i.heading} />
        ))}
      />
    ),
  },
  {
    sub: `BUSINESS STUDIES`,
    Tab: (
      <ScrollableTabsButtonForce
        acc1={subjectNotes.businessStudies.Term1.map(i => (
          <SimpleAccordion heading={i.heading} body={i.body} style={i.style} />
        ))}
        acc2={subjectNotes.maths.Term2.map(i => (
          <SimpleAccordion heading={i.heading} />
        ))}
      />
    ),
  },
  {
    sub: `ACCOUNTING`,
    Tab: (
      <ScrollableTabsButtonForce
        acc1={subjectNotes.maths.Term1.map(i => (
          <SimpleAccordion heading={i.heading} />
        ))}
        acc2={subjectNotes.maths.Term2.map(i => (
          <SimpleAccordion heading={i.heading} />
        ))}
      />
    ),
  },
  {
    sub: `GEOGRAPHY`,
    Tab: (
      <ScrollableTabsButtonForce
        acc1={subjectNotes.geography.Term1.map(i => (
          <SimpleAccordion heading={i.heading} body={i.body} style={i.style} />
        ))}
        acc2={subjectNotes.geography.Term2.map(i => (
          <SimpleAccordion heading={i.heading} />
        ))}
      />
    ),
  },
  {
    sub: `ENGLISH HL`,
    Tab: (
      <ScrollableTabsButtonForce
        acc1={subjectNotes.englishHl.Term1.map(i => (
          <SimpleAccordion heading={i.heading} />
        ))}
        acc2={subjectNotes.maths.Term2.map(i => (
          <SimpleAccordion heading={i.heading} />
        ))}
      />
    ),
  },
  {
    sub: `ENGLISH FAL`,
    Tab: (
      <ScrollableTabsButtonForce
        acc1={subjectNotes.maths.Term1.map(i => (
          <SimpleAccordion heading={i.heading} />
        ))}
        acc2={subjectNotes.maths.Term2.map(i => (
          <SimpleAccordion heading={i.heading} />
        ))}
      />
    ),
  },
  {
    sub: `SPEDI HOME LANGUAGE`,
    Tab: (
      <ScrollableTabsButtonForce
        acc1={subjectNotes.maths.Term1.map(i => (
          <SimpleAccordion heading={i.heading} />
        ))}
        acc2={subjectNotes.maths.Term2.map(i => (
          <SimpleAccordion heading={i.heading} />
        ))}
      />
    ),
  },
  {
    sub: `ISIZULU HOME LANGUAGE`,
    Tab: (
      <ScrollableTabsButtonForce
        acc1={subjectNotes.maths.Term1.map(i => (
          <SimpleAccordion heading={i.heading} />
        ))}
        acc2={subjectNotes.maths.Term2.map(i => (
          <SimpleAccordion heading={i.heading} />
        ))}
      />
    ),
  },
  {
    sub: `HISTORY`,
    Tab: (
      <ScrollableTabsButtonForce
        acc1={subjectNotes.maths.Term1.map(i => (
          <SimpleAccordion heading={i.heading} />
        ))}
        acc2={subjectNotes.maths.Term1.map(i => (
          <SimpleAccordion heading={i.heading} />
        ))}
      />
    ),
  },
];

export default Pp;
