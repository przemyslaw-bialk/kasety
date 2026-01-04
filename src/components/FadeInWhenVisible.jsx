import { motion } from "framer-motion";
import PropTypes from "prop-types";

function FadeInWhenVisible({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
    >
      {children}
    </motion.div>
  );
}
FadeInWhenVisible.propTypes = {
  children: PropTypes.node.isRequired,
};
export default FadeInWhenVisible;
