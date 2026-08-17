import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, Check } from "lucide-react";

/**
 * Submit button for the contact form. Reads the same `status` state
 * Contact.jsx already tracks ("idle" | "sending" | "sent" | "error")
 * and animates the icon through: plane -> spinner -> checkmark.
 *
 * Usage in Contact.jsx:
 *   <SendButton status={status} />
 */
export default function SendButton({ status }) {
  const isSending = status === "sending";
  const isSent = status === "sent";

  return (
    <motion.button
      type="submit"
      disabled={isSending}
      whileHover={isSending ? {} : { scale: 1.03 }}
      whileTap={isSending ? {} : { scale: 0.97 }}
      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-mono-ui text-sm font-medium transition-colors duration-200 disabled:cursor-not-allowed"
      style={{
        backgroundColor: "var(--accent)",
        color: "#111111",
        opacity: isSending ? 0.85 : 1,
      }}
    >
      <span>
        {status === "idle" && "Send Message"}
        {isSending && "Sending..."}
        {isSent && "Sent"}
        {status === "error" && "Try Again"}
      </span>

      {/* Icon swaps with a small overlap-crossfade instead of an abrupt jump cut */}
      <span className="relative w-4 h-4 inline-block">
        <AnimatePresence mode="wait" initial={false}>
          {status === "idle" && (
            <motion.span
              key="plane"
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 14, y: -6 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0"
            >
              <Send size={16} />
            </motion.span>
          )}

          {isSending && (
            <motion.span
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, rotate: 360 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 0.2 },
                rotate: { duration: 0.7, repeat: Infinity, ease: "linear" },
              }}
              className="absolute inset-0"
            >
              <Loader2 size={16} />
            </motion.span>
          )}

          {isSent && (
            <motion.span
              key="check"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "backOut" }}
              className="absolute inset-0"
            >
              <Check size={16} />
            </motion.span>
          )}

          {status === "error" && (
            <motion.span
              key="plane-retry"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0"
            >
              <Send size={16} />
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </motion.button>
  );
}