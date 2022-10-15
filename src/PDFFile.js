import React, { useEffect, useState } from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  name: {
    backgroundColor: "#1e293b",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    height: "10%",
    color: "#0ea5e9",
  },
});

// Create Document Component
function PDFFile({ personalInfo }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.name}>
          <Text>{`blahblah`}</Text>
          <Text>{`blibli`}</Text>
        </View>
      </Page>
    </Document>
  );
}

const PDFView = () => {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <PDFViewer>
      <PDFFile />
    </PDFViewer>
  );
};
export default PDFView;
