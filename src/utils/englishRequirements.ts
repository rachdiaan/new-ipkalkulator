const englishRequirements = {
  s1: 450,
  s2: 475,
  s3: 500
};

export const checkEnglishRequirement = (score: number, programLevel: string) => {
  const required = englishRequirements[programLevel as keyof typeof englishRequirements] || 450;
  
  return {
    meets: score >= required,
    required,
    message: score >= required 
      ? `✓ Meets graduation requirement (min. ${required})`
      : `✗ Below graduation requirement (min. ${required})`
  };
};