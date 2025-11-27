import { useState } from "react";
import "./App.css";

function App() {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [responseText, setResponseText] = useState("NO REQUEST YET");
    const [errorText, setErrorText] = useState("");

    const sendRequest = async () => {
        setResponseText("SENDING REQUEST...");
        setErrorText("");

        const url =
            `https://www.leqalimza.az/api/v1/admin/system-statistics` +
            `?startDate=${encodeURIComponent(startDate)}` +
            `&endDate=${encodeURIComponent(endDate)}`;

        try {
            const res = await fetch(url, {
                method: "GET",
                credentials: "include",
                headers: {
                    "JSESSIONID": "1840b05a-d3f9-424c-9d1a-ca07494ef67b",
                },
            });

            if (!res.ok) {
                const txt = await res.text().catch(() => `STATUS ${res.status}`);
                setErrorText(`HTTP ERROR ${res.status}: ${txt}`);
                return;
            }

            const json = await res.json();
            setResponseText(JSON.stringify(json, null, 2));
        } catch (err: any) {
            setErrorText(`FETCH ERROR: ${err.message}`);
        }
    };

    return (
        <div style={{ padding: "2rem", fontFamily: "Arial" }}>
            <h1>SYSTEM STATISTICS REQUEST</h1>

            <div style={{ marginBottom: "1rem" }}>
                <label>START DATE (ISO):</label><br />
                <input
                    type="text"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    placeholder="2025-01-01T00:00:00"
                    style={{ padding: "8px", width: "300px" }}
                />
            </div>

            <div style={{ marginBottom: "1rem" }}>
                <label>END DATE (ISO):</label><br />
                <input
                    type="text"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    placeholder="2025-12-31T23:59:59"
                    style={{ padding: "8px", width: "300px" }}
                />
            </div>

            <button
                onClick={sendRequest}
                style={{ padding: "0.7rem 1.4rem", fontSize: "16px" }}
            >
                SEND REQUEST
            </button>

            <h3>RESPONSE:</h3>
            <pre style={{ background: "#f4f4f4", padding: "12px" }}>{responseText}</pre>

            {errorText && (
                <>
                    <h3 style={{ color: "red" }}>ERROR:</h3>
                    <pre style={{ background: "#fdd", padding: "12px" }}>{errorText}</pre>
                </>
            )}
        </div>
    );
}

export default App;
