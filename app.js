// Quiz Application JavaScript

class EnzymeQuiz {
    constructor() {
        // Quiz data
        this.multipleChoiceQuestions = [
            {
                "id": 1,
                "question": "What are enzymes primarily composed of?",
                "options": ["Carbohydrates", "Lipids", "Proteins", "Nucleic acids"],
                "correct": 2,
                "category": "Basic Enzyme Concepts"
            },
            {
                "id": 2,
                "question": "Which statement best describes enzymes?",
                "options": ["They are consumed in the reactions they catalyze", "They increase activation energy", "They are biological catalysts that accelerate reactions", "They are only effective at high concentrations"],
                "correct": 2,
                "category": "Basic Enzyme Concepts"
            },
            {
                "id": 3,
                "question": "What is the exception to the rule that enzymes are proteins?",
                "options": ["Metalloenzymes", "Ribozymes", "Isoenzymes", "Coenzymes"],
                "correct": 1,
                "category": "Basic Enzyme Concepts"
            },
            {
                "id": 4,
                "question": "A conjugated enzyme consists of:",
                "options": ["Only protein", "Apoenzyme + prosthetic group/coenzyme = holoenzyme", "Only cofactors", "Multiple active sites"],
                "correct": 1,
                "category": "Enzyme Structure"
            },
            {
                "id": 5,
                "question": "Which enzyme class catalyzes oxidation-reduction reactions?",
                "options": ["Transferases", "Hydrolases", "Oxidoreductases", "Ligases"],
                "correct": 2,
                "category": "Enzyme Classification"
            },
            {
                "id": 6,
                "question": "Transferases are responsible for:",
                "options": ["Breaking bonds with water addition", "Transferring chemical groups between compounds", "Rearranging molecules", "Forming new bonds"],
                "correct": 1,
                "category": "Enzyme Classification"
            },
            {
                "id": 7,
                "question": "Which enzyme class would include digestive enzymes like lipase?",
                "options": ["Lyases", "Hydrolases", "Isomerases", "Transferases"],
                "correct": 1,
                "category": "Enzyme Classification"
            },
            {
                "id": 8,
                "question": "The active site of an enzyme:",
                "options": ["Is where allosteric effectors bind", "Is a pocket where substrates bind", "Cannot be modified", "Is the same in all enzymes"],
                "correct": 1,
                "category": "Active Sites"
            },
            {
                "id": 9,
                "question": "Allosteric sites:",
                "options": ["Are the same as active sites", "Only bind substrates", "Bind effector molecules that can increase or decrease enzyme activity", "Are found in all enzymes"],
                "correct": 2,
                "category": "Active Sites"
            },
            {
                "id": 10,
                "question": "How do enzymes work?",
                "options": ["By increasing activation energy", "By lowering activation energy", "By changing the equilibrium of reactions", "By being consumed in the reaction"],
                "correct": 1,
                "category": "Enzyme Function"
            },
            {
                "id": 11,
                "question": "In Michaelis-Menten kinetics, Km represents:",
                "options": ["Maximum velocity", "Substrate concentration at ½ Vmax", "Initial velocity", "Enzyme concentration"],
                "correct": 1,
                "category": "Enzyme Kinetics"
            },
            {
                "id": 12,
                "question": "The Lineweaver-Burk plot is useful because:",
                "options": ["It shows a hyperbolic curve", "It's harder to determine Km", "It provides a linear plot for easier determination of Vmax and Km", "It only works at high substrate concentrations"],
                "correct": 2,
                "category": "Enzyme Kinetics"
            },
            {
                "id": 13,
                "question": "At low substrate concentrations, the reaction velocity:",
                "options": ["Remains constant", "Rises almost linearly with increasing substrate", "Decreases rapidly", "Reaches maximum immediately"],
                "correct": 1,
                "category": "Enzyme Kinetics"
            },
            {
                "id": 14,
                "question": "Prosthetic groups differ from coenzymes in that they are:",
                "options": ["Loosely bound to enzymes", "Always organic", "Tightly bound to enzymes", "Only inorganic"],
                "correct": 2,
                "category": "Cofactors"
            },
            {
                "id": 15,
                "question": "Which of the following is an example of a cofactor?",
                "options": ["NAD", "Mg²⁺", "FAD", "Coenzyme A"],
                "correct": 1,
                "category": "Cofactors"
            },
            {
                "id": 16,
                "question": "Co-dehydrogenases are involved in:",
                "options": ["Group transfer reactions", "Oxidation-reduction reactions as H⁺ carriers", "Hydrolysis reactions", "Isomerization reactions"],
                "correct": 1,
                "category": "Coenzymes"
            },
            {
                "id": 17,
                "question": "Isoenzymes:",
                "options": ["Have different catalytic activities", "Are from the same tissue origin", "Are different forms of the same enzyme with same catalytic activity", "Cannot be used for diagnosis"],
                "correct": 2,
                "category": "Isoenzymes"
            },
            {
                "id": 18,
                "question": "CPK-MM isoenzyme increases in:",
                "options": ["Brain tumors", "Heart diseases", "Skeletal muscle diseases", "Liver diseases"],
                "correct": 2,
                "category": "Isoenzymes"
            },
            {
                "id": 19,
                "question": "Non-functional plasma enzymes can result from:",
                "options": ["Cell damage", "Increased membrane permeability", "Pathway obstruction", "All of the above"],
                "correct": 3,
                "category": "Plasma Enzymes"
            },
            {
                "id": 20,
                "question": "Water-soluble vitamins include:",
                "options": ["Vitamins A, D, E, K", "Vitamin C and B complex", "Only vitamin C", "Only B vitamins"],
                "correct": 1,
                "category": "Vitamins"
            },
            {
                "id": 21,
                "question": "NAD and NADP are derived from:",
                "options": ["Thiamin (B1)", "Riboflavin (B2)", "Niacin (B3)", "Pyridoxine (B6)"],
                "correct": 2,
                "category": "Vitamins"
            },
            {
                "id": 22,
                "question": "Long-term regulation of enzymes involves:",
                "options": ["Allosteric modification", "Control of enzyme quantity through synthesis and degradation", "Competitive inhibition", "pH changes"],
                "correct": 1,
                "category": "Enzyme Regulation"
            },
            {
                "id": 23,
                "question": "Feedback regulation means:",
                "options": ["End products increase enzyme synthesis", "End products decrease enzyme synthesis at gene level", "Substrates inhibit enzymes", "Cofactors regulate enzymes"],
                "correct": 1,
                "category": "Enzyme Regulation"
            },
            {
                "id": 24,
                "question": "Allosteric activators:",
                "options": ["Decrease enzyme activity", "Bind to the active site", "Increase enzyme activity by binding to allosteric sites", "Are always end products"],
                "correct": 2,
                "category": "Enzyme Regulation"
            },
            {
                "id": 25,
                "question": "Phosphorylation of enzymes:",
                "options": ["Always activates them", "Always inactivates them", "Can either activate or inactivate depending on the enzyme", "Only occurs in muscle"],
                "correct": 2,
                "category": "Enzyme Regulation"
            },
            {
                "id": 26,
                "question": "Competitive inhibition:",
                "options": ["Cannot be reversed", "Can be reversed by increasing substrate concentration", "Decreases Vmax", "Affects a different site than the active site"],
                "correct": 1,
                "category": "Enzyme Inhibition"
            },
            {
                "id": 27,
                "question": "In competitive inhibition:",
                "options": ["Vmax decreases, Km increases", "Vmax unchanged, Km increases", "Vmax increases, Km decreases", "Both Vmax and Km decrease"],
                "correct": 1,
                "category": "Enzyme Inhibition"
            },
            {
                "id": 28,
                "question": "Noncompetitive inhibition:",
                "options": ["Can be overcome by increasing substrate", "Affects Vmax but not Km", "Occurs at the active site", "Is always reversible"],
                "correct": 1,
                "category": "Enzyme Inhibition"
            },
            {
                "id": 29,
                "question": "Proenzymes (zymogens) are:",
                "options": ["Active forms of enzymes", "Inactive enzyme precursors", "Enzyme inhibitors", "Coenzymes"],
                "correct": 1,
                "category": "Proenzymes"
            },
            {
                "id": 30,
                "question": "Pepsinogen is activated by:",
                "options": ["Enterokinase", "HCl", "Trypsin", "Thrombin"],
                "correct": 1,
                "category": "Proenzymes"
            }
        ];

        this.shortAnswerQuestions = [
            {
                "id": 31,
                "question": "List the six major classes of enzymes and give one example of each.",
                "answer": "1. Oxidoreductases (e.g., dehydrogenase) 2. Transferases (e.g., aminotransferase) 3. Hydrolases (e.g., lipase) 4. Lyases (e.g., decarboxylase) 5. Isomerases (e.g., phosphoglucose isomerase) 6. Ligases (e.g., DNA ligase)",
                "category": "Enzyme Classification"
            },
            {
                "id": 32,
                "question": "Explain the difference between apoenzyme, prosthetic group, and holoenzyme.",
                "answer": "Apoenzyme: Protein portion without cofactor. Prosthetic group: Tightly bound non-protein component. Holoenzyme: Complete active enzyme (apoenzyme + prosthetic group/coenzyme).",
                "category": "Enzyme Structure"
            },
            {
                "id": 33,
                "question": "Describe how enzymes lower activation energy and facilitate reactions.",
                "answer": "Enzymes lower activation energy by stabilizing the transition state through specific binding interactions at the active site, reducing the energy barrier and increasing reaction rate.",
                "category": "Enzyme Function"
            },
            {
                "id": 34,
                "question": "What are the main differences between competitive and noncompetitive inhibition?",
                "answer": "Competitive: Inhibitor binds active site, increases Km, Vmax unchanged, overcome by high substrate. Noncompetitive: Inhibitor binds allosteric site, Vmax decreases, Km unchanged, not overcome by substrate.",
                "category": "Enzyme Inhibition"
            },
            {
                "id": 35,
                "question": "List four factors that affect the rate of enzymatic reactions.",
                "answer": "1. Substrate concentration 2. Enzyme concentration 3. Temperature 4. pH",
                "category": "Enzyme Function"
            }
        ];

        // Combine all questions
        this.allQuestions = [...this.multipleChoiceQuestions, ...this.shortAnswerQuestions];
        this.totalQuestions = this.allQuestions.length;
        
        // State management
        this.currentQuestionIndex = 0;
        this.userAnswers = {};
        this.quizStarted = false;
        this.quizCompleted = false;
        
        // DOM elements
        this.initializeElements();
        this.attachEventListeners();
        this.showScreen('welcome');
    }

    initializeElements() {
        this.screens = {
            welcome: document.getElementById('welcomeScreen'),
            quiz: document.getElementById('quizScreen'),
            results: document.getElementById('resultsScreen'),
            review: document.getElementById('reviewScreen')
        };
        
        this.progressContainer = document.getElementById('progressContainer');
        this.progressFill = document.getElementById('progressFill');
        this.currentQuestionSpan = document.getElementById('currentQuestion');
        this.totalQuestionsSpan = document.getElementById('totalQuestions');
        
        this.questionNumber = document.getElementById('questionNumber');
        this.questionCategory = document.getElementById('questionCategory');
        this.questionContent = document.getElementById('questionContent');
        
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.submitBtn = document.getElementById('submitBtn');
        
        this.scorePercentage = document.getElementById('scorePercentage');
        this.scoreText = document.getElementById('scoreText');
        this.scoreMessage = document.getElementById('scoreMessage');
        this.mcScore = document.getElementById('mcScore');
        this.saScore = document.getElementById('saScore');
        
        this.reviewQuestions = document.getElementById('reviewQuestions');
        
        this.totalQuestionsSpan.textContent = this.totalQuestions;
    }

    attachEventListeners() {
        document.getElementById('startQuizBtn').addEventListener('click', () => this.startQuiz());
        this.prevBtn.addEventListener('click', () => this.previousQuestion());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.submitBtn.addEventListener('click', () => this.submitQuiz());
        document.getElementById('reviewBtn').addEventListener('click', () => this.showReview());
        document.getElementById('retakeBtn').addEventListener('click', () => this.retakeQuiz());
        document.getElementById('backToResultsBtn').addEventListener('click', () => this.showScreen('results'));
    }

    showScreen(screenName) {
        // Hide all screens
        Object.values(this.screens).forEach(screen => {
            if (screen) screen.classList.remove('active');
        });
        
        // Show requested screen
        switch(screenName) {
            case 'welcome':
                this.screens.welcome.classList.add('active');
                this.progressContainer.style.display = 'none';
                break;
            case 'quiz':
                this.screens.quiz.classList.add('active');
                this.progressContainer.style.display = 'flex';
                break;
            case 'results':
                this.screens.results.classList.add('active');
                this.progressContainer.style.display = 'none';
                break;
            case 'review':
                this.screens.review.classList.add('active');
                this.progressContainer.style.display = 'none';
                break;
        }
    }

    startQuiz() {
        this.quizStarted = true;
        this.currentQuestionIndex = 0;
        this.userAnswers = {};
        this.quizCompleted = false;
        this.showScreen('quiz');
        this.displayCurrentQuestion();
        this.updateProgress();
    }

    displayCurrentQuestion() {
        const question = this.allQuestions[this.currentQuestionIndex];
        
        this.questionNumber.textContent = `Question ${this.currentQuestionIndex + 1}`;
        this.questionCategory.textContent = question.category || 'General';
        
        if (question.options) {
            // Multiple choice question
            this.questionContent.innerHTML = this.renderMultipleChoice(question);
        } else {
            // Short answer question
            this.questionContent.innerHTML = this.renderShortAnswer(question);
        }
        
        this.updateNavigation();
        this.updateProgress();
        
        // Restore previous answer if exists
        this.restorePreviousAnswer(question);
    }

    renderMultipleChoice(question) {
        return `
            <div class="question-text">${question.question}</div>
            <div class="option-group">
                ${question.options.map((option, index) => `
                    <div class="option-item" onclick="quiz.selectOption(${index})">
                        <input type="radio" name="question_${question.id}" value="${index}" id="option_${index}">
                        <label for="option_${index}" class="option-text">${String.fromCharCode(97 + index)}) ${option}</label>
                    </div>
                `).join('')}
            </div>
        `;
    }

    renderShortAnswer(question) {
        return `
            <div class="question-text">${question.question}</div>
            <textarea class="short-answer-input" id="shortAnswer_${question.id}" 
                placeholder="Enter your answer here..." rows="5"
                oninput="quiz.saveShortAnswer(${question.id}, this.value)"></textarea>
        `;
    }

    selectOption(optionIndex) {
        const question = this.allQuestions[this.currentQuestionIndex];
        this.userAnswers[question.id] = optionIndex;
        
        // Update UI
        const options = document.querySelectorAll('.option-item');
        options.forEach((option, index) => {
            option.classList.toggle('selected', index === optionIndex);
            const radio = option.querySelector('input[type="radio"]');
            radio.checked = index === optionIndex;
        });
    }

    saveShortAnswer(questionId, answer) {
        this.userAnswers[questionId] = answer.trim();
    }

    restorePreviousAnswer(question) {
        const previousAnswer = this.userAnswers[question.id];
        
        if (previousAnswer !== undefined) {
            if (question.options) {
                // Multiple choice
                const option = document.querySelector(`input[value="${previousAnswer}"]`);
                if (option) {
                    option.checked = true;
                    option.closest('.option-item').classList.add('selected');
                }
            } else {
                // Short answer
                const textarea = document.getElementById(`shortAnswer_${question.id}`);
                if (textarea) {
                    textarea.value = previousAnswer;
                }
            }
        }
    }

    updateNavigation() {
        this.prevBtn.disabled = this.currentQuestionIndex === 0;
        
        const isLastQuestion = this.currentQuestionIndex === this.totalQuestions - 1;
        this.nextBtn.style.display = isLastQuestion ? 'none' : 'inline-flex';
        this.submitBtn.style.display = isLastQuestion ? 'inline-flex' : 'none';
    }

    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.totalQuestions) * 100;
        this.progressFill.style.width = `${progress}%`;
        this.currentQuestionSpan.textContent = this.currentQuestionIndex + 1;
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayCurrentQuestion();
        }
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.totalQuestions - 1) {
            this.currentQuestionIndex++;
            this.displayCurrentQuestion();
        }
    }

    submitQuiz() {
        this.quizCompleted = true;
        this.calculateResults();
        this.showScreen('results');
    }

    calculateResults() {
        let mcCorrect = 0;
        let saCorrect = 0;
        
        // Calculate multiple choice score
        this.multipleChoiceQuestions.forEach(question => {
            const userAnswer = this.userAnswers[question.id];
            if (userAnswer === question.correct) {
                mcCorrect++;
            }
        });
        
        // Calculate short answer score (simplified - just check if answered)
        this.shortAnswerQuestions.forEach(question => {
            const userAnswer = this.userAnswers[question.id];
            if (userAnswer && userAnswer.length > 10) { // Basic length check
                saCorrect++;
            }
        });
        
        const totalCorrect = mcCorrect + saCorrect;
        const percentage = Math.round((totalCorrect / this.totalQuestions) * 100);
        
        // Update results display
        this.scorePercentage.textContent = `${percentage}%`;
        this.scoreText.textContent = `${totalCorrect} / ${this.totalQuestions}`;
        this.mcScore.textContent = `${mcCorrect} / ${this.multipleChoiceQuestions.length}`;
        this.saScore.textContent = `${saCorrect} / ${this.shortAnswerQuestions.length}`;
        
        // Set score message
        if (percentage >= 90) {
            this.scoreMessage.textContent = "Excellent work!";
        } else if (percentage >= 80) {
            this.scoreMessage.textContent = "Great job!";
        } else if (percentage >= 70) {
            this.scoreMessage.textContent = "Good effort!";
        } else {
            this.scoreMessage.textContent = "Keep studying!";
        }
    }

    showReview() {
        this.generateReview();
        this.showScreen('review');
    }

    generateReview() {
        let reviewHTML = '';
        
        this.allQuestions.forEach((question, index) => {
            const userAnswer = this.userAnswers[question.id];
            const isCorrect = question.options ? 
                userAnswer === question.correct : 
                userAnswer && userAnswer.length > 10;
            
            reviewHTML += `
                <div class="review-question">
                    <div class="review-question-header">
                        <div class="review-question-number">Question ${index + 1}</div>
                        <div class="review-question-status ${isCorrect ? 'correct' : 'incorrect'}">
                            ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
                        </div>
                    </div>
                    <div class="review-question-content">
                        <div class="review-question-text">${question.question}</div>
                        ${this.generateReviewAnswers(question, userAnswer, isCorrect)}
                    </div>
                </div>
            `;
        });
        
        this.reviewQuestions.innerHTML = reviewHTML;
    }

    generateReviewAnswers(question, userAnswer, isCorrect) {
        if (question.options) {
            // Multiple choice
            const userAnswerText = userAnswer !== undefined ? question.options[userAnswer] : 'No answer';
            const correctAnswerText = question.options[question.correct];
            
            return `
                <div class="review-answer user-answer">
                    <div class="answer-label">Your Answer:</div>
                    <div class="answer-text">${userAnswerText}</div>
                </div>
                ${!isCorrect ? `
                    <div class="review-answer correct-answer">
                        <div class="answer-label">Correct Answer:</div>
                        <div class="answer-text">${correctAnswerText}</div>
                    </div>
                ` : ''}
            `;
        } else {
            // Short answer
            return `
                <div class="review-answer user-answer">
                    <div class="answer-label">Your Answer:</div>
                    <div class="answer-text">${userAnswer || 'No answer provided'}</div>
                </div>
                <div class="review-answer correct-answer">
                    <div class="answer-label">Sample Answer:</div>
                    <div class="answer-text">${question.answer}</div>
                </div>
            `;
        }
    }

    retakeQuiz() {
        this.currentQuestionIndex = 0;
        this.userAnswers = {};
        this.quizStarted = false;
        this.quizCompleted = false;
        this.showScreen('welcome');
    }
}

// Initialize the quiz when the page loads
let quiz;
document.addEventListener('DOMContentLoaded', () => {
    quiz = new EnzymeQuiz();
});