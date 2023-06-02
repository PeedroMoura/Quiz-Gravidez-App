import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  viewPrincipal: {
    flex: 1,
    backgroundColor: "#e454bc",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 50,
  },

  viewPergunta: {
    width: 310,
    height: 220,
    backgroundColor: "#ee91d3",
    marginTop: 100,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    borderColor: "#f6bce4",
    borderWidth: 4,
  },

  viewAlternativa: {
    height: 44,
    width: "100%",
    borderRadius: 12,
    backgroundColor: "#ee91d3",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 15,
    borderColor: "#f6bce4",
    borderWidth: 2,
  },

  viewAlternativaText: {
    color: "white",
    fontSize: 16,
  },

  buttonContent: {
    marginTop: 15,
  },

  buttonContainer: {
    borderRadius: 30,
    marginTop: 20,
    justifyContent: "center",
    marginBottom: 10,
    width: 300,
  },
});
