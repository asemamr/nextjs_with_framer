export const navbarVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 1,
    },
  },
};

export const textVariants = (delay) => ({
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
    },
  },
});

export const slideIn = (from, type, delay, duration) => ({
  hidden: {
    x: from === "left" ? "-100%" : from === "right" ? "100%" : 0,
    y: from === "up" ? "-100%" : from === "down" ? "100%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
    },
  },
});
export const fadeIn = (from, type, delay, duration) => ({
  hidden: {
    x: from === "left" ? -100 : from === "right" ? 100 : 0,
    y: from === "up" ? -100 : from === "down" ? 100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
    },
  },
});

export const stampVariants = {
  hidden: {
    opacity: 0,
    rotate: 60,
    scale: 0.8,
  },
  show: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      delay: 1.2,
      duration: 0.5,
    },
  },
};

export const infinityDown = {
  hidden: {
    y: 0,
    opacity: 1,
  },
  show: {
    y: 50,
    opacity: 0,
    transition: {
      ease: "easeInOut",
      repeatType: "reverse",
      repeat: 3,
      duration: 1,
    },
  },
};

export const textContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const letterVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export const planet = (direction) => ({
  hidden: {
    // x: direction === "left" ? "-100%" : "100%",
    scale: .5, 
    opacity: 0
  },
  show: {
    rotate: 0,
    x: 0,
    scale:1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 160,
      damping: 10,
      duration: 1.25,
      delay: .5 ,
    },
  },
});

export const mapVariants = (delay)=> ({
  hidden: {
    rotate: -45,
    opacity: 0,
    y: -50
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 1.25,
      type: "spring"
    }
  }
})

export const list = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    }
  }
}
export const item = {
  hidden: {
    opacity: 0,
    y: 50
  }, 
  show: {
    opacity: 1,
    y: 0
  }
}
