export interface Formula {
    name: string;
    formula: string;
    description: string;
    id: number;
  }
  
  const formulas: Formula[] = [
    {
      id: 1,
      name: "Quadratic Formula",
      formula: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
      description: "Used to solve quadratic equations of the form ax² + bx + c = 0"
    },
    {
      id: 2,
      name: "Pythagorean Theorem",
      formula: "a^2 + b^2 = c^2",
      description: "Relates the lengths of sides in a right triangle"
    },
    {
      id: 3,
      name: "Area of a Circle",
      formula: "A = \\pi r^2",
      description: "Calculates the area of a circle given its radius"
    }
  ];
  
  export const getFormulas = () => formulas;
  
  export const getFormula = (id: number) => formulas.find(m => m.id === id);
  