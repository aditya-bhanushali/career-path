import { NextRequest, NextResponse } from 'next/server'

/**
 * Mock Career Guidance Responses
 * Provides AI-like career guidance without API costs
 * 100% FREE - No External API Needed
 */

// Career guidance templates
const careerGuidanceResponses: Record<string, string> = {
  ai: `## Career Path Recommendations

### 1. **Machine Learning Engineer**
- **Salary Range:** $120,000 - $180,000/year
- **Required Skills:** Python, TensorFlow, PyTorch, Statistics, SQL
- **Timeline:** 12-18 months

### 2. **AI/ML Research Scientist**
- **Salary Range:** $130,000 - $200,000+/year
- **Required Skills:** Python, Advanced Math, Research Papers, PyTorch, GPUs
- **Timeline:** 18-24 months (may need Master's degree)

### 3. **Data Scientist**
- **Salary Range:** $100,000 - $160,000/year
- **Required Skills:** Python, Statistics, SQL, Tableau, A/B Testing
- **Timeline:** 6-12 months

## Learning Roadmap

**Month 1-2:** Python fundamentals & Data structures
**Month 3-4:** Machine Learning basics & Statistics
**Month 5-6:** TensorFlow/PyTorch & Deep Learning
**Month 7-8:** Build 3-5 projects & contribute to open source
**Month 9-12:** Prepare portfolio & interview prep

## Recommended Resources

- **Courses:** Andrew Ng's ML Specialization, Fast.ai
- **Books:** "Hands-On Machine Learning" by Aurélien Géron
- **Practice:** Kaggle competitions, GitHub projects
- **Communities:** r/MachineLearning, AI Discord servers

## Skill Gap Analysis

✅ Great: Strong foundational interest
⚠️ Needs Work: Math for ML, Statistics
📚 Action: Take linear algebra + statistics courses on Coursera

## Growth Opportunities

- AI Product Manager ($150k-$250k)
- AI Architect ($160k-$300k)
- Startup Founder (Unlimited potential)
- Research Lab Scientist ($120k-$200k+)`,

  web: `## Career Path Recommendations

### 1. **Full Stack Web Developer**
- **Salary Range:** $80,000 - $140,000/year
- **Required Skills:** JavaScript/TypeScript, React, Node.js, Databases, CSS
- **Timeline:** 6-9 months

### 2. **Frontend Developer**
- **Salary Range:** $85,000 - $155,000/year
- **Required Skills:** React, Vue, Angular, CSS, JavaScript, Design
- **Timeline:** 4-6 months

### 3. **Backend Developer**
- **Salary Range:** $90,000 - $165,000/year
- **Required Skills:** Node.js, Python, Databases, APIs, DevOps basics
- **Timeline:** 6-8 months

## Learning Roadmap

**Month 1:** HTML, CSS, JavaScript fundamentals
**Month 2-3:** React or Vue framework deep dive
**Month 4:** Backend basics (Node.js/Python)
**Month 5:** Full stack project with database
**Month 6:** Deploy to production, build portfolio

## Recommended Resources

- **Courses:** FreeCodeCamp, Codecademy, Udemy
- **Projects:** Build 5 projects (GitHub showcase)
- **Practice:** LeetCode medium problems
- **Communities:** Dev.to, Stack Overflow, GitHub Discussions

## Skill Gap Analysis

✅ Strength: Web fundamentals
⚠️ Gap: Database design, API architecture
📚 Action: Build a project with MongoDB/SQL

## Growth Opportunities

- Senior Full Stack ($130k-$200k)
- Technical Lead ($150k-$220k)
- Product Engineer ($160k-$300k)
- Startup CTO (Unlimited equity potential)`,

  data: `## Career Path Recommendations

### 1. **Data Scientist**
- **Salary Range:** $100,000 - $160,000/year
- **Required Skills:** Python, SQL, Statistics, Machine Learning, Tableau
- **Timeline:** 8-12 months

### 2. **Analytics Engineer**
- **Salary Range:** $95,000 - $150,000/year
- **Required Skills:** SQL, Python, dbt, Data Warehousing, BI Tools
- **Timeline:** 6-9 months

### 3. **Business Intelligence Analyst**
- **Salary Range:** $70,000 - $120,000/year
- **Required Skills:** SQL, Python, Tableau, Power BI, Analytics
- **Timeline:** 4-6 months

## Learning Roadmap

**Month 1-2:** Excel mastery + SQL basics
**Month 3-4:** Python for data analysis (pandas, NumPy)
**Month 5-6:** Statistics + A/B testing fundamentals
**Month 7-8:** Machine Learning basics + SQL advanced
**Month 9-12:** Build 3-5 portfolio projects

## Recommended Resources

- **SQL:** Mode Analytics SQL Tutorial, LeetCode SQL
- **Python:** DataCamp, Codecademy
- **Statistics:** Khan Academy, StatQuest YouTube
- **Practice:** Build projects on Kaggle

## Skill Gap Analysis

✅ Ready: Problem-solving mindset
⚠️ Needed: Statistical thinking, SQL optimization
📚 Action: Start with SQL + Python immediately

## Growth Opportunities

- Senior Data Scientist ($140k-$220k)
- Staff Analytics Engineer ($150k-$300k)
- Chief Data Officer ($200k-$500k)`,

  design: `## Career Path Recommendations

### 1. **Product Designer**
- **Salary Range:** $90,000 - $160,000/year
- **Required Skills:** Figma, User Research, Prototyping, Design Systems
- **Timeline:** 8-12 months

### 2. **UX/UI Designer**
- **Salary Range:** $75,000 - $140,000/year
- **Required Skills:** Figma, Adobe XD, CSS basics, Design principles
- **Timeline:** 6-9 months

### 3. **Design Thinking Consultant**
- **Salary Range:** $85,000 - $150,000/year
- **Required Skills:** Design thinking, User testing, Communication, Strategy
- **Timeline:** 4-8 months

## Learning Roadmap

**Month 1-2:** Design fundamentals + Color theory
**Month 3-4:** Figma + Prototyping deep dive
**Month 5-6:** User research + Usability testing
**Month 7-8:** Build 3-5 case studies for portfolio
**Month 9-12:** Network + Interview prep

## Recommended Resources

- **Tools:** Figma, Adobe Suite
- **Courses:** DesignLab, Coursera UX Specialization
- **Communities:** Designer Hangout, ADPList mentorship
- **Portfolio:** Dribbble, Behance

## Skill Gap Analysis

✅ Strength: Creative thinking
⚠️ Gap: Technical skills (Figma), Research methods
📚 Action: Start Figma tutorials immediately

## Growth Opportunities

- Design Lead ($130k-$200k)
- Design Director ($150k-$250k)
- Head of Design ($180k-$400k)`,

  default: `## Career Path Recommendations

### 1. **Software Engineer**
- **Salary Range:** $90,000 - $200,000+/year
- **Required Skills:** Problem-solving, Programming, System design
- **Timeline:** Varies by path

### 2. **Technical Product Manager**
- **Salary Range:** $120,000 - $250,000/year
- **Required Skills:** Technical knowledge, Leadership, Communication
- **Timeline:** 3-5 years experience needed

### 3. **Solutions Architect**
- **Salary Range:** $110,000 - $200,000/year
- **Required Skills:** System design, Technical depth, Communication
- **Timeline:** 5+ years experience

## Learning Roadmap

**Step 1:** Choose your specialization (Web, Mobile, Data, AI, etc.)
**Step 2:** Build strong fundamentals in that area
**Step 3:** Create 3-5 portfolio projects
**Step 4:** Contribute to open source
**Step 5:** Network and apply to positions

## Recommended Resources

- **Fundamentals:** CS50 (Free on YouTube)
- **Specialization:** Choose field-specific courses
- **Projects:** Build real-world applications
- **Interview Prep:** LeetCode, System Design interviews

## Skill Gap Analysis

💡 Tip: Identify your specific interest first, then dive deep

## Growth Opportunities

- Tech Lead → Engineering Manager → Director
- Specialist → Staff Engineer → Principal
- Consultant → Startup Founder
- Many paths available!`,
}

/**
 * Generate response based on user message
 */
function generateResponse(
  message: string,
  interests?: string,
  educationLevel?: string,
  skills?: string[],
  goals?: string
): string {
  const lowerMessage = message.toLowerCase()

  // Detect topic from message
  if (
    lowerMessage.includes('ai') ||
    lowerMessage.includes('machine') ||
    lowerMessage.includes('deep learning')
  ) {
    return careerGuidanceResponses.ai
  }

  if (
    lowerMessage.includes('web') ||
    lowerMessage.includes('frontend') ||
    lowerMessage.includes('backend') ||
    lowerMessage.includes('javascript') ||
    lowerMessage.includes('react')
  ) {
    return careerGuidanceResponses.web
  }

  if (
    lowerMessage.includes('data') ||
    lowerMessage.includes('analytics') ||
    lowerMessage.includes('sql') ||
    lowerMessage.includes('statistics')
  ) {
    return careerGuidanceResponses.data
  }

  if (
    lowerMessage.includes('design') ||
    lowerMessage.includes('ux') ||
    lowerMessage.includes('ui') ||
    lowerMessage.includes('figma')
  ) {
    return careerGuidanceResponses.design
  }

  if (interests) {
    if (interests.toLowerCase().includes('ai') || interests.toLowerCase().includes('machine')) {
      return careerGuidanceResponses.ai
    }
    if (
      interests.toLowerCase().includes('web') ||
      interests.toLowerCase().includes('design')
    ) {
      return careerGuidanceResponses.web
    }
    if (interests.toLowerCase().includes('data')) {
      return careerGuidanceResponses.data
    }
  }

  return careerGuidanceResponses.default
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json()
    const { message, interests, educationLevel, skills, goals } = body

    // Validate that message is provided
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      )
    }

    // Simulate API delay (makes it feel more realistic)
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Generate response based on user input
    const responseText = generateResponse(
      message,
      interests,
      educationLevel,
      skills,
      goals
    )

    // Return successful response
    return NextResponse.json(
      {
        success: true,
        response: responseText,
        mode: 'DEMO_MODE_FREE',
        usage: {
          prompt_tokens: 0,
          completion_tokens: 0,
        },
      },
      { status: 200 }
    )
  } catch (error) {
    // Handle general errors
    console.error('Chat API Error:', error)
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : 'Internal server error',
      },
      { status: 500 }
    )
  }
}

/**
 * GET handler - Returns method not allowed
 */
export async function GET() {
  return NextResponse.json(
    { error: 'Method GET is not allowed. Use POST to send messages.' },
    { status: 405 }
  )
}
