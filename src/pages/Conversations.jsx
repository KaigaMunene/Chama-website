const PodcastSection = () => {
  return (
    <section
      className="bg-gray-50 py-12 px-6"
      id="podcast"
      aria-labelledby="podcast-heading"
    >
      {/* Headline Section */}
      <div className="max-w-7xl mx-auto text-center">
        <h2
          className="text-3xl font-bold text-gray-800 md:text-5xl"
        >
          Discover Conversations That Matter
        </h2>
        <p className="mt-4 text-gray-600 text-lg md:text-xl">
          A space for deep, meaningful discussions about relationships, life,
          and career.
        </p>
        <p className="mt-2 text-indigo-600 font-medium text-sm md:text-base">
          Proud Winner of the 2024 Podcast Excellence Award
        </p>
      </div>

      {/* Podcast Player and Highlights */}
      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 gap-8">
        {/* Video Highlights */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Episode Highlights
          </h3>
          <div className="w-full max-w-lg mx-auto">
            <video
              controls
              className="rounded-lg shadow-lg w-full"
              poster="/path/to/video-thumbnail.jpg" // Replace with your thumbnail
            >
              <source src="/path/to/highlight-reel.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-red-700 transition mt-4"
          >
            Watch on YouTube
          </a>
        </div>

        {/* Podcast Player */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Listen to the Latest Episode
          </h3>
          <iframe
            src="https://open.spotify.com/embed/show/sample" // Replace "sample" with your podcast embed ID
            width="100%"
            height="232"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            className="rounded-lg shadow-lg"
            title="Podcast Player"
          ></iframe>
          <a
            href="https://spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-green-700 transition mt-4"
          >
            Listen on Spotify
          </a>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
