import { useMemo, useState } from "react";
import { Calendar, Clock, User, Phone, MessageCircle, Sparkles, X, Plus } from "lucide-react";
import { CarSize, SERVICES, WHATSAPP_NUMBER, formatUGX } from "@/data/services";
import { toast } from "sonner";

interface Props {
  carSize: CarSize;
  setCarSize: (s: CarSize) => void;
}

export const BookingSection = ({ carSize, setCarSize }: Props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [picker, setPicker] = useState<string>("");
  const [selected, setSelected] = useState<string[]>([]);

  const selectedServices = useMemo(
    () => selected.map((id) => SERVICES.find((s) => s.id === id)!).filter(Boolean),
    [selected]
  );

  const total = useMemo(
    () =>
      selectedServices.reduce(
        (sum, s) => sum + (carSize === "small" ? s.small : s.big),
        0
      ),
    [selectedServices, carSize]
  );

  const today = new Date().toISOString().split("T")[0];

  const addService = () => {
    if (!picker) return;
    if (selected.includes(picker)) {
      toast.info("That service is already added.");
      return;
    }
    setSelected((prev) => [...prev, picker]);
    setPicker("");
  };

  const removeService = (id: string) =>
    setSelected((prev) => prev.filter((s) => s !== id));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (selected.length === 0) {
      toast.error("Please pick at least one service from the dropdown.");
      return;
    }
    if (!name.trim() || !phone.trim() || !date || !time) {
      toast.error("Please fill in all booking details.");
      return;
    }

    const lines = selectedServices
      .map((s) => `• ${s.name} — UGX ${formatUGX(carSize === "small" ? s.small : s.big)}`)
      .join("\n");

    const message =
      `Hello RamosMAX, I would like to book the following services:\n\n` +
      `${lines}\n\n` +
      `Car Type: ${carSize === "small" ? "Small" : "Big"}\n` +
      `Date: ${date}\n` +
      `Time: ${time}\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n\n` +
      `Total: UGX ${formatUGX(total)}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp to confirm your booking…");
  };

  const availableServices = SERVICES.filter((s) => !selected.includes(s.id));

  return (
    <section id="booking" className="relative py-24 md:py-32 bg-surface/30">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Book Your Slot</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Reserve via <span className="gradient-gold-text italic">WhatsApp</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Pick your service, fill the form — we'll send your request straight to WhatsApp for instant confirmation.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gradient-card gold-border rounded-3xl p-6 md:p-10 shadow-elegant"
        >
          {/* Service picker (dropdown) */}
          <div className="mb-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground mb-2">
              <Sparkles className="h-4 w-4" /> Pick a Service
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <select
                value={picker}
                onChange={(e) => setPicker(e.target.value)}
                className="form-input flex-1"
                aria-label="Select a service"
              >
                <option value="">— Choose a service —</option>
                {availableServices.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name} · UGX {formatUGX(carSize === "small" ? s.small : s.big)}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={addService}
                disabled={!picker}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-gold text-gold-foreground font-semibold shadow-gold disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] transition-bounce"
              >
                <Plus className="h-4 w-4" /> Add
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              You can add more than one service. Prices update with your car size.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Full Name" icon={<User className="h-4 w-4" />}>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                maxLength={80}
                className="form-input"
              />
            </Field>

            <Field label="Phone Number" icon={<Phone className="h-4 w-4" />}>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="07XX XXX XXX"
                maxLength={20}
                className="form-input"
              />
            </Field>

            <Field label="Car Type">
              <div className="flex gap-2">
                {(["small", "big"] as CarSize[]).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setCarSize(s)}
                    className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-smooth ${
                      carSize === s
                        ? "bg-gradient-gold text-gold-foreground shadow-gold"
                        : "bg-input text-foreground/70 hover:text-foreground border border-border"
                    }`}
                  >
                    {s === "small" ? "Small Car" : "Big Car"}
                  </button>
                ))}
              </div>
            </Field>

            <Field label="Preferred Date" icon={<Calendar className="h-4 w-4" />}>
              <input
                type="date"
                required
                min={today}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="form-input"
              />
            </Field>

            <Field label="Preferred Time" icon={<Clock className="h-4 w-4" />}>
              <input
                type="time"
                required
                min="08:00"
                max="22:00"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="form-input"
              />
            </Field>

            <div className="md:col-span-1 flex items-end">
              <div className="w-full p-4 rounded-xl bg-input/60 border border-border">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Estimated Total</div>
                <div className="font-display text-2xl font-bold gradient-gold-text">
                  UGX {formatUGX(total)}
                </div>
              </div>
            </div>
          </div>

          {/* Selected services preview */}
          <div className="mt-6">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
              Selected Services ({selected.length})
            </div>
            {selectedServices.length === 0 ? (
              <div className="block text-center py-4 px-4 rounded-xl border border-dashed border-gold/40 text-muted-foreground text-sm">
                No services added yet — use the dropdown above to add a service.
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {selectedServices.map((s) => (
                  <span
                    key={s.id}
                    className="inline-flex items-center gap-2 pl-3 pr-1.5 py-1.5 rounded-full text-xs font-medium bg-primary/40 border border-gold/30 text-foreground"
                  >
                    {s.name} · UGX {formatUGX(carSize === "small" ? s.small : s.big)}
                    <button
                      type="button"
                      onClick={() => removeService(s.id)}
                      aria-label={`Remove ${s.name}`}
                      className="h-5 w-5 rounded-full bg-background/40 hover:bg-destructive/80 flex items-center justify-center transition-smooth"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="mt-8 w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-gold text-gold-foreground font-bold text-lg shadow-gold hover:scale-[1.02] transition-bounce"
          >
            <MessageCircle className="h-5 w-5" />
            Send Booking via WhatsApp
          </button>
          <p className="text-center text-xs text-muted-foreground mt-3">
            You'll be redirected to WhatsApp with your booking details pre-filled.
          </p>
        </form>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          background: hsl(var(--input));
          border: 1px solid hsl(var(--border));
          border-radius: 0.75rem;
          color: hsl(var(--foreground));
          font-size: 0.95rem;
          transition: all 0.3s;
          color-scheme: dark;
        }
        .form-input:focus {
          outline: none;
          border-color: hsl(var(--gold));
          box-shadow: 0 0 0 3px hsl(var(--gold) / 0.15);
        }
        .form-input::placeholder { color: hsl(var(--muted-foreground)); }
        select.form-input option { background: hsl(var(--background)); color: hsl(var(--foreground)); }
      `}</style>
    </section>
  );
};

const Field = ({
  label,
  icon,
  children,
}: {
  label: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) => (
  <label className="block">
    <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground mb-2">
      {icon} {label}
    </div>
    {children}
  </label>
);
