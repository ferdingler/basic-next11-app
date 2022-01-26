export default function Preview({ message, timestamp }) {
  return message + " " + timestamp;
}

export async function getStaticProps(context) {
  // If you request this page with the preview mode cookies set:
  //
  // - context.preview will be true
  // - context.previewData will be the same as
  //   the argument used for `setPreviewData`.
  return {
    props: {
      message: context.preview ? context.previewData.message : "none",
      timestamp: context.preview ? context.previewData.timestamp : "none",
    },
  };
}
