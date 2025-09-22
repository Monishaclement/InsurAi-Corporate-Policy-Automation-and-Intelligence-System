# chatbot.py
from transformers import pipeline

# Load a question-answering model (fully free & offline)
qa_pipeline = pipeline("question-answering", model="distilbert-base-cased-distilled-squad")

# Insurance knowledge context
insurance_context = """
Life insurance provides financial protection to beneficiaries in case of the policyholder's death.
Term insurance covers a fixed period and pays a death benefit if the insured dies during that term.
Whole life insurance provides lifetime coverage and may include cash value accumulation.
Health insurance covers medical expenses due to illness, accident, or hospitalization.
Car insurance covers damages to your vehicle due to accidents, theft, or natural disasters.
Home insurance covers property damage, theft, and liability for your home.
Insurance premiums are the payments made to the insurer to maintain coverage.
Claims are filed to request payment for a covered loss or event.
Nominees or beneficiaries receive the payout upon the insured event.
Pre-existing conditions may have waiting periods in health insurance policies.
"""
print("🤖 Free Offline Insurance Chatbot Ready! Type 'exit' to quit.\n")

while True:
    question = input("You: ").strip()
    if question.lower() in ("exit", "quit"):
        print("Chatbot: Goodbye 👋")
        break
    if not question:
        continue

    # Run the Q&A model
    answer = qa_pipeline(question=question, context=insurance_context)
    print(f"Chatbot: {answer['answer']}\n")
