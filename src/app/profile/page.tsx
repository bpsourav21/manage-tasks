
import ProtectedRoute from "../protected";

type User = {
    id: number;
    name: string;
    email: string;
};

export default function Profile() {
    return (
        <ProtectedRoute>
            <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr 1fr",
                        gap: 20,
                    }}
                >
                    profile page here
                </div>
            </main>
        </ProtectedRoute>
    );
}
