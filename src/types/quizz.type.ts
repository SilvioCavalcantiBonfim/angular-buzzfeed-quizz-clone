export type Quizz = { 
    title: string; 
    questions: { 
        id: number; 
        question: string; 
        options: { 
            id: number; 
            name: string; 
            alias: string; 
        }[]; }[]; 
        results: { 
            A: string; 
            B: string; 
        }; 
    }