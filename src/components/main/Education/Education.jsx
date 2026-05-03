"use client";

import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section className="w-full py-16 px-4 md:px-10 bg-gray-900">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-14"
        >
          Educational <span className="text-cyan-400">Qualification</span>
        </motion.h2>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-indigo-500 ml-4 md:ml-10 space-y-10">

          {/* Item */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="ml-6"
          >
            <div className="absolute -left-[10px] w-4 h-4 bg-indigo-500 rounded-full"></div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Bachelor of Arts (Honours)
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mt-2">
                <span className="font-semibold">Status:</span> 2nd Year (Ongoing)
              </p>

              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">University:</span> National University, Bangladesh
              </p>

              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">Institution:</span> Sirajganj Govt. Collage
              </p>

              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">Field:</span> Islamic History And Culture
              </p>

              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                Currently focusing on academic studies along with web development
                (React, Next.js, Node.js) for building a strong tech career.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Education;