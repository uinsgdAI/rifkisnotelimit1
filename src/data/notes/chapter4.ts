import type { SubtopicNote } from '../../types/syllabus';

export const CHAPTER_4_NOTES: SubtopicNote[] = [
  {
    id: '4.1',
    chapterId: 4,
    code: '4.1',
    title: 'Geometrical terms',
    tier: 'Core & Extended',
    summary: 'Use exact geometrical vocabulary for angles, polygons, triangles, quadrilaterals, circles, and 3D solids.',
    coreObjectives: [
      'Use and interpret the geometrical terms: point, line, parallel, bearing, right angle, acute, obtuse and reflex angles, perpendicular, similarity and congruence.',
      'Use and interpret vocabulary of triangles, quadrilaterals, polygons, and simple solid figures (cube, cuboid, prism, cylinder, pyramid, cone, sphere).',
    ],
    keyFormulas: [
      { label: 'Polygon names', latex: '5:\\text{Pentagon},\\ 6:\\text{Hexagon},\\ 7:\\text{Heptagon},\\ 8:\\text{Octagon},\\ 10:\\text{Decagon}' },
    ],
    studyNotes: [
      {
        heading: 'Congruence vs Similarity',
        body: 'Congruent shapes have the EXACT same shape and size (all corresponding sides and angles equal; criteria SSS, SAS, ASA, RHS). Similar shapes have the same angles and proportional sides (equal shape, scaled size).',
      },
    ],
    workedExamples: [
      {
        title: 'Classifying quadrilaterals by diagonal properties',
        question: 'A quadrilateral has two pairs of parallel sides, all four sides equal, diagonals bisecting at $90^\\circ$, and no right angles. Name the quadrilateral.',
        marks: 1,
        steps: [
          'Equal sides + parallel opposite sides + diagonals perpendicular without $90^\\circ$ interior angles defines a rhombus.',
        ],
        answer: 'Rhombus',
        markSchemeNotes: 'B1 for Rhombus.',
      },
    ],
    commonMistakes: [
      'Confusing "obtuse" ($90^\\circ < \\theta < 180^\\circ$) with "reflex" ($180^\\circ < \\theta < 360^\\circ$).',
      'Calling a kite a rhombus (a rhombus has all 4 sides equal; a kite has two pairs of adjacent equal sides).',
    ],
    quickCheck: {
      id: 'qc-4.1',
      prompt: 'An angle measures $215^\\circ$. What type of angle is it? (acute / obtuse / reflex)',
      answer: 'reflex',
      acceptedAnswers: ['reflex', 'reflex angle'],
      hint: 'Angles strictly between $180^\\circ$ and $360^\\circ$.',
      solution: 'Since $180^\\circ < 215^\\circ < 360^\\circ$, it is a reflex angle.',
    },
  },
  {
    id: '4.2',
    chapterId: 4,
    code: '4.2',
    title: 'Geometrical constructions',
    tier: 'Core & Extended',
    summary: 'Measure lines and angles accurately and construct triangles, perpendicular bisectors, and angle bisectors with ruler and compasses.',
    coreObjectives: [
      'Measure and draw lines and angles.',
      'Construct a triangle given the three sides using a ruler and a pair of compasses only.',
    ],
    keyFormulas: [
      { label: 'Locus of equidistant points', latex: '\\text{Equidistant from } A \\& B \\implies \\text{Perpendicular bisector of } AB' },
    ],
    studyNotes: [
      {
        heading: 'Compass construction arcs MUST stay visible',
        body: 'Cambridge examiners explicitly deduct marks if construction arcs are erased or drawn freehand! Keep compass width fixed when drawing intersecting arcs for SSS triangles, perpendicular bisectors, and angle bisectors.',
      },
    ],
    workedExamples: [
      {
        title: 'Constructing a triangle with sides $6\\text{ cm}, 5\\text{ cm}, 4\\text{ cm}$',
        question: 'Describe the exact compass steps to construct $\\triangle ABC$ with $AB = 6\\text{ cm}$, $AC = 5\\text{ cm}$, $BC = 4\\text{ cm}$.',
        marks: 2,
        steps: [
          'Draw base $AB = 6\\text{ cm}$ accurately with a ruler.',
          'Set compass to $5\\text{ cm}$, place point at $A$, draw an arc above $AB$.',
          'Set compass to $4\\text{ cm}$, place point at $B$, draw an arc intersecting the first arc at $C$. Join $AC$ and $BC$.',
        ],
        answer: 'Intersecting arcs of radii $5\\text{ cm}$ from $A$ and $4\\text{ cm}$ from $B$',
        markSchemeNotes: 'B1 for $6\\text{ cm}$ base, B1 for clearly visible intersecting compass arcs.',
      },
    ],
    commonMistakes: [
      'Rubbing out compass construction arcs before handing in the paper.',
      'Reading the wrong scale (inner vs outer) on a protractor.',
    ],
    quickCheck: {
      id: 'qc-4.2',
      prompt: 'Can a triangle be constructed with side lengths $3\\text{ cm}$, $4\\text{ cm}$, and $8\\text{ cm}$? (yes/no)',
      answer: 'no',
      acceptedAnswers: ['no', 'n'],
      hint: 'Check the triangle inequality: is $3 + 4 > 8$?',
      solution: 'No, because $3 + 4 = 7 < 8$, so the arcs from the endpoints will never intersect.',
    },
  },
  {
    id: '4.3',
    chapterId: 4,
    code: '4.3',
    title: 'Scale drawings and bearings',
    tier: 'Core & Extended',
    summary: 'Draw and interpret scale diagrams and calculate three-figure bearings measured clockwise from North.',
    coreObjectives: [
      'Draw and interpret scale drawings.',
      'Use and interpret three-figure bearings (measured clockwise from North, e.g. $045^\\circ$).',
    ],
    keyFormulas: [
      { label: 'Back bearing rule', latex: '\\text{Bearing of } A \\text{ from } B = (\\text{Bearing of } B \\text{ from } A) \\pm 180^\\circ' },
    ],
    studyNotes: [
      {
        heading: 'Three golden rules of bearings',
        body: '1. Always measure FROM the North line at the point specified after the word "from" ("bearing of $B$ from $A$" means stand at $A$). 2. Always measure CLOCKWISE. 3. Always write THREE digits (e.g. $065^\\circ$, not $65^\\circ$).',
      },
    ],
    workedExamples: [
      {
        title: 'Calculating a back bearing',
        question: 'The bearing of town $B$ from town $A$ is $072^\\circ$. Find the bearing of town $A$ from town $B$.',
        marks: 2,
        steps: [
          'Draw parallel North lines at $A$ and $B$. Co-interior angle at $B$ is $180^\\circ - 72^\\circ = 108^\\circ$ anticlockwise, or simply add $180^\\circ$ since $072^\\circ < 180^\\circ$.',
          '$072^\\circ + 180^\\circ = 252^\\circ$.',
        ],
        answer: '$252^\\circ$',
        markSchemeNotes: 'M1 for $72 + 180$, A1 for $252^\\circ$.',
      },
    ],
    commonMistakes: [
      'Standing at $B$ instead of $A$ when asked for "the bearing of $B$ from $A$".',
      'Forgetting the leading zero on bearings under $100^\\circ$ (must write $048^\\circ$, not $48^\\circ$).',
    ],
    quickCheck: {
      id: 'qc-4.3',
      prompt: 'The bearing of $Q$ from $P$ is $310^\\circ$. What is the bearing of $P$ from $Q$ in degrees?',
      answer: '130',
      numericAnswer: 130,
      tolerance: 0,
      unit: '°',
      hint: 'Since $310^\\circ > 180^\\circ$, subtract $180^\\circ$.',
      solution: '$310^\\circ - 180^\\circ = 130^\\circ$.',
    },
  },
  {
    id: '4.4',
    chapterId: 4,
    code: '4.4',
    title: 'Similarity',
    tier: 'Core & Extended',
    summary: 'Calculate missing lengths in similar triangles and figures, and relate length, area, and volume scale factors (Extended).',
    coreObjectives: [
      'Calculate lengths of similar figures.',
    ],
    extendedObjectives: [
      'Use the relationships between areas and volumes of similar shapes and solids: $\\frac{A_1}{A_2} = k^2$ and $\\frac{V_1}{V_2} = k^3$.',
    ],
    keyFormulas: [
      { label: 'Scale factors (Extended)', latex: '\\text{Length ratio } k \\implies \\text{Area ratio } k^2,\\quad \\text{Volume ratio } k^3' },
    ],
    studyNotes: [
      {
        heading: 'Area and Volume scale factors',
        body: 'If you are given the volumes or surface areas of two similar solids, ALWAYS take the cube root (for volume) or square root (for area) FIRST to find the linear length scale factor $k$, before scaling lengths or converting between area and volume.',
      },
    ],
    workedExamples: [
      {
        title: 'Area and volume of similar bottles (Extended)',
        question: 'Two mathematically similar bottles have heights $12\\text{ cm}$ and $18\\text{ cm}$. The smaller bottle has volume $240\\text{ cm}^3$. Calculate the volume of the larger bottle.',
        marks: 3,
        steps: [
          'Length scale factor $k = \\frac{18}{12} = 1.5$.',
          'Volume scale factor $= k^3 = 1.5^3 = 3.375$.',
          'Larger volume $= 240 \\times 3.375 = 810\\text{ cm}^3$.',
        ],
        answer: '$810\\text{ cm}^3$',
        markSchemeNotes: 'M1 for $k = 1.5$, M1 for $240 \\times (\\frac{18}{12})^3$, A1 for $810$.',
      },
    ],
    commonMistakes: [
      'Multiplying volume by $k$ or $k^2$ instead of $k^3$.',
    ],
    quickCheck: {
      id: 'qc-4.4',
      prompt: 'Two similar cones have surface areas $36\\text{ cm}^2$ and $100\\text{ cm}^2$. If the height of the smaller cone is $9\\text{ cm}$, find the height of the larger cone.',
      answer: '15',
      numericAnswer: 15,
      tolerance: 0,
      unit: 'cm',
      hint: '$k^2 = \\frac{100}{36}$, so $k = \\frac{10}{6}$.',
      solution: '$k = \\sqrt{\\frac{100}{36}} = \\frac{5}{3}$, so larger height $= 9 \\times \\frac{5}{3} = 15\\text{ cm}$.',
    },
  },
  {
    id: '4.5',
    chapterId: 4,
    code: '4.5',
    title: 'Symmetry',
    tier: 'Core & Extended',
    summary: 'Identify line symmetry and rotational symmetry in 2D shapes and planes/axes of symmetry in 3D solids.',
    coreObjectives: [
      'Recognise line and rotational symmetry (including order of rotational symmetry) in two dimensions.',
    ],
    extendedObjectives: [
      'Recognise symmetry properties of the prism (including cylinder) and the pyramid (including cone).',
    ],
    keyFormulas: [
      { label: 'Regular $n$-gon symmetry', latex: '\\text{Lines of symmetry} = n,\\qquad \\text{Order of rotational symmetry} = n' },
    ],
    studyNotes: [
      {
        heading: 'Parallelogram vs Rectangle vs Rhombus',
        body: 'A general parallelogram has $0$ lines of symmetry and rotational symmetry of order $2$. A rectangle has $2$ lines of symmetry and order $2$. A square has $4$ lines of symmetry and order $4$. Note that rotational symmetry of order $1$ means "no rotational symmetry".',
      },
    ],
    workedExamples: [
      {
        title: 'Symmetry of a regular hexagon',
        question: 'State the number of lines of symmetry and the order of rotational symmetry of a regular hexagon.',
        marks: 2,
        steps: [
          'A regular polygon with $n = 6$ sides has $6$ lines of symmetry (3 vertex-to-vertex, 3 midpoint-to-midpoint).',
          'It maps onto itself $6$ times in a full $360^\\circ$ rotation (order $6$).',
        ],
        answer: '$6$ lines of symmetry, rotational order $6$',
        markSchemeNotes: 'B1 for $6$ lines, B1 for order $6$.',
      },
    ],
    commonMistakes: [
      'Thinking a parallelogram has diagonal lines of symmetry (it has $0$).',
      'Writing rotational symmetry order $0$ instead of $1$.',
    ],
    quickCheck: {
      id: 'qc-4.5',
      prompt: 'How many lines of symmetry does a non-square rectangle have?',
      answer: '2',
      numericAnswer: 2,
      tolerance: 0,
      hint: 'Horizontal and vertical midlines only — diagonals are NOT lines of symmetry of a rectangle.',
      solution: 'A non-square rectangle has $2$ lines of symmetry.',
    },
  },
  {
    id: '4.6',
    chapterId: 4,
    code: '4.6',
    title: 'Angles',
    tier: 'Core & Extended',
    summary: 'Calculate unknown angles using lines, parallel lines, triangles, quadrilaterals, and interior/exterior angles of polygons.',
    coreObjectives: [
      'Calculate unknown angles using angles at a point, on a straight line, vertically opposite angles, and angles in parallel lines (corresponding, alternate, co-interior).',
      'Calculate interior and exterior angles of regular and irregular polygons.',
    ],
    keyFormulas: [
      { label: 'Sum of interior angles', latex: 'S = (n - 2) \\times 180^\\circ' },
      { label: 'Sum of exterior angles', latex: '\\sum \\text{Exterior angles} = 360^\\circ' },
      { label: 'Regular polygon exterior angle', latex: '\\text{Exterior} = \\frac{360^\\circ}{n}, \\qquad \\text{Interior} = 180^\\circ - \\text{Exterior}' },
    ],
    studyNotes: [
      {
        heading: 'Using exact Cambridge angle reasons',
        body: 'When asked to "give a geometrical reason for your answer", write the formal names: "alternate angles", "corresponding angles", "co-interior (allied) angles sum to $180^\\circ$", or "vertically opposite angles" — never write "Z-angles", "F-angles", or "C-angles"!',
      },
    ],
    workedExamples: [
      {
        title: 'Number of sides from interior angle',
        question: 'Each interior angle of a regular polygon is $156^\\circ$. Find the number of sides.',
        marks: 2,
        steps: [
          'Find exterior angle: $180^\\circ - 156^\\circ = 24^\\circ$.',
          'Divide $360^\\circ$ by exterior angle: $n = \\frac{360}{24} = 15$ sides.',
        ],
        answer: '$15$ sides',
        markSchemeNotes: 'M1 for $180 - 156 = 24$ and $\\frac{360}{24}$, A1 for $15$.',
      },
    ],
    commonMistakes: [
      'Writing "Z-angle" or "F-angle" instead of "alternate" or "corresponding".',
      'Forgetting that interior + exterior = $180^\\circ$ at each vertex.',
    ],
    quickCheck: {
      id: 'qc-4.6',
      prompt: 'What is the size of one interior angle of a regular octagon ($8$ sides) in degrees?',
      answer: '135',
      numericAnswer: 135,
      tolerance: 0,
      unit: '°',
      hint: 'Exterior angle $= 360^\\circ \\div 8 = 45^\\circ$.',
      solution: 'Exterior $= \\frac{360}{8} = 45^\\circ \\implies \\text{Interior} = 180^\\circ - 45^\\circ = 135^\\circ$.',
    },
  },
  {
    id: '4.7',
    chapterId: 4,
    code: '4.7',
    title: 'Circle theorems I',
    tier: 'Core & Extended',
    summary: 'Apply fundamental circle properties: angle in a semicircle ($90^\\circ$), radius perpendicular to tangent, and symmetric chord/tangent lengths.',
    coreObjectives: [
      'Calculate unknown angles and give explanations using: angle in a semicircle is $90^\\circ$; angle between tangent and radius is $90^\\circ$.',
    ],
    extendedObjectives: [
      'Use symmetry properties of circles (equal chords are equidistant from centre; perpendicular bisector of a chord passes through the centre; tangents from an external point are equal in length).',
    ],
    keyFormulas: [
      { label: 'Angle in a semicircle', latex: '\\text{Diameter subtends } 90^\\circ \\text{ at circumference}' },
      { label: 'Tangent–radius angle', latex: '\\text{Radius} \\perp \\text{Tangent} \\implies 90^\\circ' },
    ],
    studyNotes: [
      {
        heading: 'Spotting hidden isosceles triangles inside circles',
        body: 'Two radii from the centre $O$ to points on the circumference ALWAYS form an isosceles triangle with equal base angles! Always mark radii with tick marks on the exam diagram immediately.',
      },
    ],
    workedExamples: [
      {
        title: 'Tangent and radius right-angled triangle',
        question: '$PT$ is a tangent to circle centre $O$ at $T$. If $OT = 5\\text{ cm}$ and $OP = 13\\text{ cm}$, find length $PT$.',
        marks: 2,
        steps: [
          '$\\angle OTP = 90^\\circ$ (tangent perpendicular to radius).',
          'By Pythagoras: $PT = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12\\text{ cm}$.',
        ],
        answer: '$12\\text{ cm}$',
        markSchemeNotes: 'M1 for $\\angle OTP = 90^\\circ$ and $13^2 - 5^2$, A1 for $12$.',
      },
    ],
    commonMistakes: [
      'Assuming a chord is a diameter without verifying it passes through the centre $O$.',
    ],
    quickCheck: {
      id: 'qc-4.7',
      prompt: '$AB$ is a diameter of a circle and $C$ lies on the circumference. If $\\angle CAB = 34^\\circ$, find $\\angle CBA$ in degrees.',
      answer: '56',
      numericAnswer: 56,
      tolerance: 0,
      unit: '°',
      hint: '$\\angle ACB = 90^\\circ$ (angle in a semicircle).',
      solution: '$\\angle CBA = 180^\\circ - 90^\\circ - 34^\\circ = 56^\\circ$.',
    },
    sandbox: 'circle-theorems',
  },
  {
    id: '4.8',
    chapterId: 4,
    code: '4.8',
    title: 'Circle theorems II',
    tier: 'Extended',
    summary: 'Apply angle at the centre ($2\\theta$), angles in the same segment, opposite angles of a cyclic quadrilateral ($180^\\circ$), and the alternate segment theorem.',
    coreObjectives: [
      'Identify cyclic vertices and chords on a circle.',
    ],
    extendedObjectives: [
      'Use angle at centre = $2 \\times$ angle at circumference.',
      'Use angles in the same segment are equal.',
      'Use opposite angles of a cyclic quadrilateral sum to $180^\\circ$.',
      'Use the alternate segment theorem.',
    ],
    keyFormulas: [
      { label: 'Centre vs circumference', latex: '\\angle_{\\text{centre}} = 2 \\times \\angle_{\\text{circumference}}' },
      { label: 'Cyclic quadrilateral', latex: '\\alpha + \\beta = 180^\\circ' },
      { label: 'Alternate segment theorem', latex: '\\angle(\\text{tangent},\\text{chord}) = \\angle(\\text{subtended in opposite segment})' },
    ],
    studyNotes: [
      {
        heading: 'Checking cyclic quadrilaterals carefully',
        body: 'ALL FOUR vertices of a cyclic quadrilateral must lie on the circumference of the circle! If one vertex is at the centre $O$, it is NOT a cyclic quadrilateral — use the "angle at centre = $2\\times$ angle at circumference" theorem instead.',
      },
    ],
    workedExamples: [
      {
        title: 'Cyclic quadrilateral and angle at centre (Extended)',
        question: 'Points $A, B, C, D$ lie on a circle with centre $O$. $\\angle ADC = 112^\\circ$. Find (a) $\\angle ABC$ and (b) reflex $\\angle AOC$.',
        marks: 3,
        steps: [
          '(a) $ABCD$ is a cyclic quadrilateral, so opposite angles sum to $180^\\circ$: $\\angle ABC = 180^\\circ - 112^\\circ = 68^\\circ$.',
          '(b) Reflex $\\angle AOC$ is subtended by the major arc opposite $B$? Wait: acute/obtuse $\\angle AOC$ subtended by arc $AC$ is $2 \\times \\angle ABC = 2 \\times 68^\\circ = 136^\\circ$, while reflex $\\angle AOC = 2 \\times \\angle ADC = 2 \\times 112^\\circ = 224^\\circ$.',
        ],
        answer: '(a) $68^\\circ$, (b) $224^\\circ$',
        markSchemeNotes: 'B1 for $68^\\circ$, M1 for $2 \\times 112^\\circ$ (or $360 - 136$), A1 for $224^\\circ$.',
      },
    ],
    commonMistakes: [
      'Treating a quadrilateral with a vertex at the centre $O$ as a cyclic quadrilateral.',
      'Forgetting to state the exact theorem name when asked for reasons.',
    ],
    quickCheck: {
      id: 'qc-4.8',
      prompt: 'A tangent meets a chord $AB$ at $A$ forming an angle of $63^\\circ$. What is the angle subtended by chord $AB$ at point $C$ in the alternate segment (in degrees)?',
      answer: '63',
      numericAnswer: 63,
      tolerance: 0,
      unit: '°',
      hint: 'By the alternate segment theorem, the angle between tangent and chord equals the angle in the alternate segment.',
      solution: 'By the alternate segment theorem, $\\angle ACB = 63^\\circ$.',
    },
    sandbox: 'circle-theorems',
  },
];
