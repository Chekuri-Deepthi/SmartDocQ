export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center py-20 px-4">
      <span className="bg-gray-800 px-3 py-1 rounded-full text-sm mb-4">
        ⚡ AI-Powered Documentation
      </span>
      <h1 className="text-4xl font-bold mb-4">
        SmartDocQ{" "}
        <span className="text-blue-500">Your AI Assistant for Smarter Document Q&A</span>
      </h1>
      <p className="text-gray-400 max-w-2xl mb-6">
        Transforming document search into a smart, interactive experience. Get instant answers, prepare for interviews, and unlock the power of your documents.
      </p>
      <div className="flex gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded font-medium">
          Get Started Free
        </button>
        <button className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded font-medium">
          Watch Demo
        </button>
      </div>
    </section>
  );
}