// task_5/js/main.ts

interface MajorCredits {
	credits: number;
	brand: string; // Unique identifier for major credits
  }
  
  interface MinorCredits {
	credits: number;
	brand: string; // Unique identifier for minor credits
  }

// task_5/js/main.ts

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): number {
	return subject1.credits + subject2.credits;
  }
  
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): number {
	return subject1.credits + subject2.credits;
  }
  