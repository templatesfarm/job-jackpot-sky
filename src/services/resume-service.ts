// services/resumeService.ts
import { useState } from 'react';

// Types
export interface ResumeData {
  skills: string[];
  experience: {
    company: string;
    position: string;
    period: string;
    description: string;
  }[];
  education: {
    institution: string;
    degree: string;
    year: string;
  }[];
  projects: {
    name: string;
    description: string;
    technologies: string[];
  }[];
  summary: string;
}

export interface ChatbotResponse {
  content: string;
  citations?: {
    source: string;
    text: string;
  }[];
}

// Mock data for development - in production, this would come from resume parsing
const mockResumeData: ResumeData = {
  skills: [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 
    'Express', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'CI/CD',
    'REST APIs', 'GraphQL', 'Redux', 'Jest', 'Cypress'
  ],
  experience: [
    {
      company: 'Tech Solutions Inc.',
      position: 'Senior Developer',
      period: '2022 - Present',
      description: 'Led development of a scalable e-commerce platform that increased sales by 40%. Mentored junior developers and implemented automated testing, reducing bugs by 30%.'
    },
    {
      company: 'Digital Innovations',
      position: 'Web Developer',
      period: '2019 - 2022',
      description: 'Built responsive web applications for clients across various industries. Implemented CI/CD pipelines and improved page load times by 50%.'
    },
    {
      company: 'Startup Ventures',
      position: 'Junior Developer',
      period: '2017 - 2019',
      description: 'Developed and maintained frontend applications using React and backend services with Node.js. Collaborated in an agile team environment.'
    }
  ],
  education: [
    {
      institution: 'University of Technology',
      degree: 'Bachelor of Science in Computer Science',
      year: '2017'
    },
    {
      institution: 'Tech Academy',
      degree: 'AWS Certified Solutions Architect',
      year: '2020'
    }
  ],
  projects: [
    {
      name: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with inventory management, payment processing, and analytics dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS']
    },
    {
      name: 'Task Management App',
      description: 'A collaborative task management solution with real-time updates and customizable workflows.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io']
    },
    {
      name: 'Healthcare Portal',
      description: 'Patient management system for healthcare providers with appointment scheduling and medical records.',
      technologies: ['React', 'Express', 'MySQL', 'Docker']
    }
  ],
  summary: 'Full-stack developer with 5+ years of experience building scalable web applications. Expertise in JavaScript/TypeScript ecosystem, modern frontend frameworks, and cloud infrastructure. Strong problem-solving skills and experience leading development teams.'
};

// Parse resume data from file
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const parseResumeFromFile = async (file: File): Promise<ResumeData> => {
  // In a real implementation, you would:
  // 1. Send the file to a backend service
  // 2. Use a library like pdf.js, mammoth.js, or a 3rd party API to extract text
  // 3. Use NLP or an AI model to parse the structured data
  
  // For demo purposes, we'll just return mock data after a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockResumeData);
    }, 1500);
  });
};

// Generate AI response based on the question and resume data
export const generateDummyAIResponse = async (
  question: string, 
  // resumeData: ResumeData
): Promise<ChatbotResponse> => {
  // In a real implementation, you would:
  // 1. Send the question and resume data to an AI service (OpenAI, Anthropic, etc.)
  // 2. Process the response
  
  // Simple keyword-based mock implementation
  const questionLower = question.toLowerCase();
  const response: ChatbotResponse = {
    content: "I couldn't find specific information about that in the resume. Would you like me to elaborate on the candidate's skills or experience instead?",
    citations: []
  };
  
  // Experience-related questions
  if (questionLower.includes('experience') || 
      questionLower.includes('background') || 
      questionLower.includes('work history')) {
    response.content = `The candidate has over 5 years of professional experience in software development. Most recently, they've been working as a Senior Developer at Tech Solutions Inc. where they led e-commerce platform development. Previously, they worked at Digital Innovations as a Web Developer from 2019 to 2022, and started their career at Startup Ventures.`;
    response.citations = [
      {
        source: 'Resume: Experience Section',
        text: 'Led development of a scalable e-commerce platform that increased sales by 40%.'
      }
    ];
  }
  
  // Skills-related questions
  else if (questionLower.includes('skill') || 
           questionLower.includes('technolog') || 
           questionLower.includes('stack') ||
           questionLower.includes('programming') ||
           questionLower.includes('framework')) {
    response.content = `The candidate is proficient in JavaScript/TypeScript and the modern web development ecosystem. Their core skills include React, Next.js, Node.js, and both SQL and NoSQL databases. They also have experience with cloud services (particularly AWS), Docker containerization, and CI/CD pipelines for deployment automation.`;
    response.citations = [
      {
        source: 'Resume: Skills Section',
        text: 'JavaScript, TypeScript, React, Next.js, Node.js, Express, MongoDB, PostgreSQL, AWS, Docker, CI/CD'
      }
    ];
  }
  
  // Education-related questions
  else if (questionLower.includes('education') || 
           questionLower.includes('degree') || 
           questionLower.includes('university') ||
           questionLower.includes('certification')) {
    response.content = `The candidate has a Bachelor of Science in Computer Science from the University of Technology, completed in 2017. They've also obtained an AWS Certified Solutions Architect certification in 2020, demonstrating their expertise in cloud infrastructure.`;
    response.citations = [
      {
        source: 'Resume: Education Section',
        text: 'Bachelor of Science in Computer Science, AWS Certified Solutions Architect'
      }
    ];
  }
  
  // Project-related questions
  else if (questionLower.includes('project') || 
           questionLower.includes('portfolio') || 
           questionLower.includes('application') ||
           questionLower.includes('app') ||
           questionLower.includes('develop')) {
    response.content = `The candidate has worked on several notable projects, including an e-commerce platform with inventory management and analytics, a collaborative task management application with real-time features, and a healthcare portal for patient management. These projects demonstrate versatility across different domains and technology stacks.`;
    response.citations = [
      {
        source: 'Resume: Projects Section',
        text: 'E-commerce Platform, Task Management App, Healthcare Portal'
      }
    ];
  }
  
  // Leadership or soft skills
  else if (questionLower.includes('lead') || 
           questionLower.includes('team') || 
           questionLower.includes('manage') ||
           questionLower.includes('soft skill') ||
           questionLower.includes('communication')) {
    response.content = `The candidate has demonstrated leadership experience as a Senior Developer at Tech Solutions Inc., where they mentored junior developers. Their experience leading the development of a major e-commerce platform suggests they have project management abilities, and the implementation of automated testing indicates a focus on code quality and best practices.`;
    response.citations = [
      {
        source: 'Resume: Experience Section',
        text: 'Mentored junior developers and implemented automated testing, reducing bugs by 30%.'
      }
    ];
  }
  
  // Achievements or impacts
  else if (questionLower.includes('achievement') || 
           questionLower.includes('accomplishment') || 
           questionLower.includes('impact') ||
           questionLower.includes('success') ||
           questionLower.includes('improve')) {
    response.content = `The candidate has several quantifiable achievements, including increasing sales by 40% through their e-commerce platform development, reducing bugs by 30% through automated testing implementation, and improving page load times by 50% at their previous position. These metrics demonstrate a focus on business impact and technical excellence.`;
    response.citations = [
      {
        source: 'Resume: Experience Section',
        text: 'Increased sales by 40%, reduced bugs by 30%, improved page load times by 50%'
      }
    ];
  }
  
  // General or summary questions
  else if (questionLower.includes('about') || 
           questionLower.includes('summary') || 
           questionLower.includes('overview') ||
           questionLower.includes('profile') ||
           questionLower.includes('tell me about')) {
    response.content = `The candidate is a full-stack developer with over 5 years of experience building scalable web applications. They have expertise in the JavaScript/TypeScript ecosystem, including React, Next.js, and Node.js. They've worked in companies ranging from startups to established tech firms, and have led development teams. Their experience spans e-commerce, project management tools, and healthcare applications.`;
    response.citations = [
      {
        source: 'Resume: Summary',
        text: 'Full-stack developer with 5+ years of experience building scalable web applications.'
      }
    ];
  }
  
  // Simulate processing delay for realism
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(response);
    }, 800);
  });
};

// React hook for using the resume chatbot
export const useResumeChat = () => {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handle resume file upload
  const processResumeFile = async (file: File) => {
    try {
      setIsProcessing(true);
      setError(null);
      
      const data = await parseResumeFromFile(file);
      setResumeData(data);
      return data;
    } catch (err) {
      setError('Failed to process resume file. Please try again.');
      console.error('Resume processing error:', err);
      return null;
    } finally {
      setIsProcessing(false);
    }
  };

  // Generate response to a question
  const askQuestion = async (question: string) => {
    // if (!resumeData) {
    //   return {
    //     content: "Please upload a resume first so I can provide accurate information.",
    //     citations: []
    //   };
    // }
    
    try {
      const response = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ question }),
      headers: { "Content-Type": "application/json" },
    });

    const res = await response.json();
    const result = {
      content: res.answer,
    }

    return result;
    
    } catch (err) {
      console.error('Error generating response:', err);
      return {
        content: "I'm sorry, I encountered an error while processing your question. Please try again.",
        citations: []
      };
    }
  };

  return {
    resumeData,
    isProcessing,
    error,
    processResumeFile,
    askQuestion
  };
};

export default useResumeChat;
