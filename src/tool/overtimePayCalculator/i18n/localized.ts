import { bibliography } from "../bibliography";
import { createOvertimeContent, type OvertimeContentCopy } from "./content";
import type { SEOSection } from "../../../types";

type LocaleData = Omit<
  OvertimeContentCopy,
  "locale" | "slug" | "bibliography" | "seo" | "faq" | "howTo"
> & {
  title: string;
  description: string;
  ui: OvertimeContentCopy["ui"];
  faq: OvertimeContentCopy["faq"];
  howTo: OvertimeContentCopy["howTo"];
  seo: SEOSection[];
};

const data: Record<string, LocaleData> = {
  de: {
    title: "Überstundenlohn Rechner",
    description:
      "Berechne aus Stundenlohn, Arbeitszeit und Zuschlagsfaktor den zusätzlichen Bruttolohn und vergleiche mögliche Sätze.",
    ui: {
      eyebrow: "Dein Arbeitstag, in Geld übersetzt",
      intro: "Lege die bekannten Zahlungsregeln fest",
      labelBasis: "Grundbetrag bedeutet",
      optionHourly: "Stundenlohn",
      optionPeriod: "Reguläres Periodengehalt",
      labelBaseAmount: "Grundbetrag",
      labelRegularHours: "Reguläre Stunden im Zeitraum",
      labelOvertimeHours: "Überstunden",
      labelMultiplier: "Überstundenfaktor",
      multiplierHint:
        "Zum Beispiel bedeutet 1,5 150 % des normalen Stundenlohns.",
      labelRegularPay: "Regulärer Bruttolohn",
      labelOvertimePay: "Zusätzlicher Bruttolohn",
      labelTotalGross: "Bruttosumme der Periode",
      labelPremium: "Zusätzlicher Zuschlag",
      labelEffectiveRate: "Gemischter effektiver Satz",
      labelScenarios: "Regel vergleichen",
      labelScenarioMultiplier: "Faktor",
      labelScenarioOvertime: "Zusatz brutto",
      labelScenarioTotal: "Periodensumme",
      labelDecision: "Ergebnis",
      decisionPositive:
        "Deine Überstunden erhöhen diesen Betrag vor Steuern und Abzügen.",
      decisionNeutral: "Gib positive Werte ein, um den Vergleich zu sehen.",
      disclaimer:
        "Dies ist eine Bruttoschätzung. Steuern, Sozialabgaben, gesetzliche Ansprüche und Regeln der Lohnabrechnung werden nicht berechnet. Verwende die Angaben aus Vertrag, Tarifvertrag oder Abrechnung.",
      hourlyUnit: "pro Stunde",
      periodUnit: "pro Periode",
      hoursUnit: "Stunden",
      currencyUnit: "€",
    },
    faq: [
      {
        question: "Wie wird der Überstundenlohn berechnet?",
        answer:
          "Der Rechner ermittelt den Grundlohn pro Stunde, multipliziert ihn mit den Überstunden und wendet den eingegebenen Faktor an. Danach wird der zusätzliche Bruttobetrag zum regulären Periodenlohn addiert.",
      },
      {
        question: "Was bedeutet ein Überstundenfaktor von 1,5?",
        answer:
          "Bei 1,5 wird jede Überstunde mit 150 % des normalen Stundenlohns bewertet. Das Tool entscheidet nicht, ob dieser Faktor gesetzlich oder vertraglich richtig ist.",
      },
      {
        question: "Kann ich ein Monats- oder Wochengehalt verwenden?",
        answer:
          "Ja. Wähle reguläres Periodengehalt, gib den Bruttobetrag und die regulären Stunden derselben Periode ein. Daraus wird ein vergleichbarer Stundenlohn berechnet.",
      },
      {
        question: "Berechnet das Tool den Nettolohn?",
        answer:
          "Nein. Die Ergebnisse sind Bruttobeträge vor Steuern, Sozialabgaben und anderen Abzügen. Die echte Abrechnung kann weitere Regeln enthalten.",
      },
      {
        question: "Warum mehrere Faktoren vergleichen?",
        answer:
          "Die Tabelle macht Unterschiede in Angebot, Zeiterfassung oder Abrechnung schnell sichtbar, ohne eine eigene Tabelle aufzubauen.",
      },
    ],
    howTo: [
      {
        name: "Grundbetrag wählen",
        text: "Wähle Stundenlohn oder reguläres Periodengehalt und trage den vorhandenen Betrag ein.",
      },
      {
        name: "Stunden eintragen",
        text: "Gib die regulären Stunden und die im selben Zeitraum erfassten Überstunden ein.",
      },
      {
        name: "Faktor setzen",
        text: "Verwende den Faktor aus Vertrag, Tarifvertrag oder Lohnabrechnung.",
      },
      {
        name: "Ergebnis prüfen",
        text: "Vergleiche Zusatzbrutto, Periodensumme und die benachbarten Faktoren, bevor du den Betrag bestätigst.",
      },
    ],
    seo: [
      { type: "title", text: "Überstunden sichtbar machen", level: 2 },
      {
        type: "paragraph",
        html: "Überstunden werden leicht übersehen, wenn die Zeiterfassung Stunden und die Abrechnung nur eine Endsumme zeigt. Dieser Rechner trennt Grundlohn, Zuschlag und neuen Bruttobetrag für denselben Zeitraum.",
      },
      {
        type: "paragraph",
        html: "Verwende die Zahlen aus Angebot, Vertrag, Zeiterfassung oder Abrechnung. Es werden keine Daten hochgeladen und keine öffentliche Tabelle benötigt. Die Rechnung läuft im Browser und hilft dir, eine Zahl vor der Rückfrage an die Lohnbuchhaltung zu prüfen.",
      },
      {
        type: "title",
        text: "Zwei Beschreibungen für den normalen Lohn",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Stundenlohn: Betrag für eine reguläre Arbeitsstunde.",
          "Periodengehalt: Bruttobetrag und reguläre Stunden des Zeitraums. Daraus wird der Stundenlohn abgeleitet.",
        ],
      },
      { type: "title", text: "Was der Faktor verändert", level: 2 },
      {
        type: "paragraph",
        html: "Ein Faktor von 1 bewertet Überstunden wie normale Stunden. Ein höherer Wert enthält einen Zuschlag. Die Szenariotabelle hält die Stunden fest und zeigt die Bruttosumme bei 1x, 1,25x, 1,5x und 2x.",
      },
      { type: "title", text: "Brutto ist nicht netto", level: 2 },
      {
        type: "paragraph",
        html: "Das Ergebnis ist bewusst brutto. Steuern, Sozialabgaben, Grenzen, Freizeitausgleich und Ansprüche hängen von Land und Vereinbarung ab. Nutze die Rechnung als transparente Prüfung der Mathematik, nicht als Rechtsauskunft oder Nettolohnversprechen.",
      },
    ],
  },
  fr: {
    title: "Calculateur de salaire des heures supplémentaires",
    description:
      "Transformez votre taux horaire, vos heures normales et votre coefficient en montant brut supplémentaire et comparez plusieurs scénarios.",
    ui: {
      eyebrow: "Votre journée de travail, convertie en salaire",
      intro: "Indiquez les règles de paiement connues",
      labelBasis: "Le montant de base est",
      optionHourly: "Taux horaire",
      optionPeriod: "Salaire brut de la période",
      labelBaseAmount: "Montant de base",
      labelRegularHours: "Heures normales de la période",
      labelOvertimeHours: "Heures supplémentaires",
      labelMultiplier: "Coefficient des heures supplémentaires",
      multiplierHint: "Par exemple, 1,5 signifie 150 % du taux horaire normal.",
      labelRegularPay: "Salaire brut normal",
      labelOvertimePay: "Brut supplémentaire",
      labelTotalGross: "Total brut de la période",
      labelPremium: "Majoration supplémentaire",
      labelEffectiveRate: "Taux horaire moyen",
      labelScenarios: "Comparer la règle",
      labelScenarioMultiplier: "Coefficient",
      labelScenarioOvertime: "Brut en plus",
      labelScenarioTotal: "Total période",
      labelDecision: "Décision",
      decisionPositive:
        "Vos heures supplémentaires ajoutent ce montant avant impôts et retenues.",
      decisionNeutral:
        "Saisissez des valeurs positives pour voir la comparaison.",
      disclaimer:
        "Estimation brute uniquement. Les impôts, cotisations, droits légaux et règles de paie de votre employeur ne sont pas calculés. Utilisez les données de votre contrat ou bulletin.",
      hourlyUnit: "par heure",
      periodUnit: "par période",
      hoursUnit: "heures",
      currencyUnit: "€",
    },
    faq: [
      {
        question: "Comment calculer le salaire des heures supplémentaires ?",
        answer:
          "Le calcul trouve le taux horaire de base, le multiplie par les heures supplémentaires et applique le coefficient saisi. Le montant brut obtenu est ajouté au salaire normal de la période.",
      },
      {
        question: "Que signifie un coefficient de 1,5 ?",
        answer:
          "Un coefficient de 1,5 valorise chaque heure supplémentaire à 150 % du taux horaire normal. L outil ne détermine pas si ce coefficient est légal ou prévu au contrat.",
      },
      {
        question: "Puis-je utiliser un salaire mensuel ou hebdomadaire ?",
        answer:
          "Oui. Choisissez le salaire brut de la période et indiquez les heures normales correspondantes. Le taux horaire équivalent sera calculé.",
      },
      {
        question: "Est-ce un calcul du salaire net ?",
        answer:
          "Non. Les résultats sont bruts, avant impôts, cotisations et autres retenues. Le bulletin réel peut appliquer d autres règles.",
      },
      {
        question: "Pourquoi comparer plusieurs coefficients ?",
        answer:
          "Le tableau permet de repérer rapidement une différence dans une offre, un relevé d heures ou un bulletin sans refaire les calculs dans un tableur.",
      },
    ],
    howTo: [
      {
        name: "Choisir le montant de base",
        text: "Sélectionnez le taux horaire ou le salaire brut de la période, puis saisissez le montant connu.",
      },
      {
        name: "Ajouter les heures",
        text: "Saisissez les heures normales et les heures supplémentaires du même intervalle.",
      },
      {
        name: "Définir le coefficient",
        text: "Utilisez le coefficient indiqué dans votre contrat, accord collectif ou bulletin.",
      },
      {
        name: "Lire la décision",
        text: "Vérifiez le brut supplémentaire, le total et les coefficients voisins avant de valider le montant.",
      },
    ],
    seo: [
      {
        type: "title",
        text: "Rendez les heures supplémentaires visibles",
        level: 2,
      },
      {
        type: "paragraph",
        html: "Les heures supplémentaires sont difficiles à vérifier quand le relevé affiche des heures mais que le bulletin ne montre qu un total. Ce calculateur sépare le taux de base, la majoration et le nouveau brut de la période.",
      },
      {
        type: "paragraph",
        html: "Utilisez les chiffres déjà présents dans votre offre, contrat, relevé d heures ou bulletin. Aucun fichier n est envoyé et aucune base publique n est nécessaire. Le calcul reste dans le navigateur pour vérifier un montant avant de contacter la paie.",
      },
      {
        type: "title",
        text: "Deux façons de décrire le salaire normal",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Taux horaire: montant gagné pour une heure normale.",
          "Salaire de période: montant brut et heures normales correspondantes, utilisés pour déduire le taux horaire.",
        ],
      },
      { type: "title", text: "Ce que change le coefficient", level: 2 },
      {
        type: "paragraph",
        html: "Un coefficient de 1 valorise l heure supplémentaire comme une heure normale. Un coefficient supérieur ajoute une majoration. Le tableau garde les heures identiques et compare 1x, 1,25x, 1,5x et 2x.",
      },
      { type: "title", text: "Le brut n est pas le net", level: 2 },
      {
        type: "paragraph",
        html: "Le résultat est volontairement brut. Impôts, cotisations, plafonds, repos compensateur et droits dépendent du pays et de l accord applicable. Utilisez cette opération pour vérifier les chiffres, pas comme avis juridique.",
      },
    ],
  },
  id: {
    title: "Kalkulator Upah Lembur",
    description:
      "Ubah tarif per jam, jam kerja biasa, dan pengali lembur menjadi perkiraan bruto tambahan serta perbandingan skenario.",
    ui: {
      eyebrow: "Jam kerja Anda, diterjemahkan menjadi upah",
      intro: "Atur aturan pembayaran yang sudah Anda ketahui",
      labelBasis: "Jumlah dasar berarti",
      optionHourly: "Tarif per jam",
      optionPeriod: "Upah bruto periode biasa",
      labelBaseAmount: "Jumlah dasar",
      labelRegularHours: "Jam biasa dalam periode",
      labelOvertimeHours: "Jam lembur",
      labelMultiplier: "Pengali lembur",
      multiplierHint: "Contoh: 1,5 berarti 150% dari tarif per jam dasar.",
      labelRegularPay: "Upah bruto biasa",
      labelOvertimePay: "Bruto tambahan",
      labelTotalGross: "Total bruto periode",
      labelPremium: "Tambahan premium",
      labelEffectiveRate: "Tarif gabungan efektif",
      labelScenarios: "Bandingkan aturan",
      labelScenarioMultiplier: "Pengali",
      labelScenarioOvertime: "Bruto tambahan",
      labelScenarioTotal: "Total periode",
      labelDecision: "Keputusan",
      decisionPositive:
        "Lembur Anda menambah jumlah ini sebelum pajak dan potongan.",
      decisionNeutral: "Masukkan nilai positif untuk melihat perbandingan.",
      disclaimer:
        "Ini perkiraan bruto. Pajak, iuran, hak hukum, dan aturan penggajian perusahaan tidak dihitung. Gunakan angka dari kontrak atau slip gaji Anda.",
      hourlyUnit: "per jam",
      periodUnit: "per periode",
      hoursUnit: "jam",
      currencyUnit: "€",
    },
    faq: [
      {
        question: "Bagaimana upah lembur dihitung?",
        answer:
          "Kalkulator mencari tarif per jam dasar, mengalikannya dengan jam lembur, lalu menerapkan pengali yang Anda masukkan. Hasil bruto tambahan dijumlahkan dengan upah biasa.",
      },
      {
        question: "Apa arti pengali lembur 1,5?",
        answer:
          "Pengali 1,5 berarti setiap jam lembur dihargai 150% dari tarif per jam dasar. Alat ini tidak menentukan apakah pengali tersebut benar secara hukum atau kontrak.",
      },
      {
        question: "Bisakah saya memakai gaji bulanan atau mingguan?",
        answer:
          "Bisa. Pilih upah bruto periode, masukkan jumlahnya dan jam biasa dalam periode yang sama. Tarif per jam yang setara akan dihitung.",
      },
      {
        question: "Apakah ini menghitung gaji bersih?",
        answer:
          "Tidak. Hasilnya adalah jumlah bruto sebelum pajak, iuran, dan potongan lain. Slip gaji sebenarnya dapat memakai aturan tambahan.",
      },
      {
        question: "Mengapa membandingkan beberapa pengali?",
        answer:
          "Tabel skenario membantu menemukan perbedaan pada tawaran, catatan waktu, atau slip gaji tanpa membuat spreadsheet baru.",
      },
    ],
    howTo: [
      {
        name: "Pilih jumlah dasar",
        text: "Pilih tarif per jam atau upah bruto periode, lalu masukkan jumlah yang Anda miliki.",
      },
      {
        name: "Masukkan jam",
        text: "Masukkan jam biasa dan jam lembur yang tercatat dalam periode yang sama.",
      },
      {
        name: "Atur pengali",
        text: "Gunakan pengali dari kontrak, perjanjian kerja, atau dokumen penggajian.",
      },
      {
        name: "Baca hasilnya",
        text: "Periksa bruto tambahan, total periode, dan skenario pengali terdekat sebelum menanyakan angka tersebut.",
      },
    ],
    seo: [
      { type: "title", text: "Jadikan lembur mudah diperiksa", level: 2 },
      {
        type: "paragraph",
        html: "Lembur mudah terlewat ketika catatan waktu berisi jam tetapi slip gaji hanya menampilkan total. Kalkulator ini memisahkan tarif dasar, premi lembur, dan total bruto baru dalam periode yang sama.",
      },
      {
        type: "paragraph",
        html: "Gunakan angka yang sudah ada pada tawaran, kontrak, catatan waktu, atau slip gaji. Tidak ada data yang diunggah dan tidak diperlukan tabel publik. Perhitungan berjalan di browser untuk memeriksa jumlah sebelum menghubungi bagian penggajian.",
      },
      { type: "title", text: "Dua cara memasukkan upah normal", level: 2 },
      {
        type: "list",
        items: [
          "Tarif per jam: jumlah yang diterima untuk satu jam biasa.",
          "Upah periode: jumlah bruto dan jam biasa dalam periode tersebut untuk memperoleh tarif per jam.",
        ],
      },
      { type: "title", text: "Peran pengali lembur", level: 2 },
      {
        type: "paragraph",
        html: "Pengali 1 menilai lembur sama seperti jam biasa. Nilai lebih tinggi menambahkan premi. Tabel mempertahankan jumlah jam dan membandingkan hasil bruto pada 1x, 1,25x, 1,5x, dan 2x.",
      },
      { type: "title", text: "Bruto bukan upah bersih", level: 2 },
      {
        type: "paragraph",
        html: "Hasilnya sengaja berupa bruto. Pajak, iuran, batas, waktu istirahat pengganti, dan hak bergantung pada negara serta perjanjian yang berlaku. Gunakan hasil ini untuk memeriksa aritmetika, bukan sebagai putusan hukum.",
      },
    ],
  },
  it: {
    title: "Calcolatore della paga degli straordinari",
    description:
      "Trasforma la tua paga oraria, le ore normali e il moltiplicatore in una stima lorda degli straordinari e confronta diversi scenari.",
    ui: {
      eyebrow: "La tua giornata di lavoro, trasformata in paga",
      intro: "Imposta le regole di pagamento che conosci",
      labelBasis: "L importo base è",
      optionHourly: "Paga oraria",
      optionPeriod: "Paga lorda del periodo",
      labelBaseAmount: "Importo base",
      labelRegularHours: "Ore normali nel periodo",
      labelOvertimeHours: "Ore straordinarie",
      labelMultiplier: "Moltiplicatore straordinari",
      multiplierHint:
        "Per esempio, 1,5 significa il 150% della paga oraria normale.",
      labelRegularPay: "Paga lorda normale",
      labelOvertimePay: "Paga lorda extra",
      labelTotalGross: "Totale lordo del periodo",
      labelPremium: "Maggiorazione extra",
      labelEffectiveRate: "Paga oraria media effettiva",
      labelScenarios: "Confronta la regola",
      labelScenarioMultiplier: "Moltiplicatore",
      labelScenarioOvertime: "Lordo extra",
      labelScenarioTotal: "Totale periodo",
      labelDecision: "Decisione",
      decisionPositive:
        "I tuoi straordinari aggiungono questo importo prima di tasse e trattenute.",
      decisionNeutral: "Inserisci valori positivi per vedere il confronto.",
      disclaimer:
        "È una stima lorda. Non calcola tasse, contributi, diritti legali o regole del cedolino aziendale. Usa i dati del contratto o del cedolino.",
      hourlyUnit: "all ora",
      periodUnit: "per periodo",
      hoursUnit: "ore",
      currencyUnit: "€",
    },
    faq: [
      {
        question: "Come si calcola la paga degli straordinari?",
        answer:
          "Il calcolatore trova la paga oraria base, la moltiplica per le ore straordinarie e applica il moltiplicatore inserito. Poi aggiunge il lordo extra alla paga normale del periodo.",
      },
      {
        question: "Cosa significa un moltiplicatore di 1,5?",
        answer:
          "Un moltiplicatore di 1,5 valuta ogni ora straordinaria al 150% della paga oraria base. Lo strumento non stabilisce se sia corretto per legge o contratto.",
      },
      {
        question: "Posso usare uno stipendio mensile o settimanale?",
        answer:
          "Si. Scegli la paga lorda del periodo, inserisci l importo e le ore normali dello stesso periodo. Il calcolatore ricava la paga oraria equivalente.",
      },
      {
        question: "E un calcolo dello stipendio netto?",
        answer:
          "No. I risultati sono lordi, prima di tasse, contributi e altre trattenute. Il cedolino reale puo applicare regole aggiuntive.",
      },
      {
        question: "Perche confrontare piu moltiplicatori?",
        answer:
          "La tabella rende visibili le differenze in un offerta, in un registro ore o in un cedolino senza preparare un foglio di calcolo.",
      },
    ],
    howTo: [
      {
        name: "Scegli l importo base",
        text: "Seleziona la paga oraria o la paga lorda del periodo e inserisci l importo disponibile.",
      },
      {
        name: "Inserisci le ore",
        text: "Indica le ore normali e le ore straordinarie registrate nello stesso periodo.",
      },
      {
        name: "Imposta il moltiplicatore",
        text: "Usa il moltiplicatore indicato dal contratto, dall accordo o dal cedolino.",
      },
      {
        name: "Leggi il risultato",
        text: "Controlla il lordo extra, il totale e gli scenari vicini prima di confermare o chiedere chiarimenti.",
      },
    ],
    seo: [
      { type: "title", text: "Rendi visibili gli straordinari", level: 2 },
      {
        type: "paragraph",
        html: "Gli straordinari sono difficili da verificare quando il registro mostra le ore ma il cedolino mostra solo un totale. Questo calcolatore separa paga base, maggiorazione e nuovo lordo del periodo.",
      },
      {
        type: "paragraph",
        html: "Usa i numeri già presenti in offerta, contratto, registro ore o cedolino. Nessun dato viene caricato e non serve una tabella pubblica. Il calcolo avviene nel browser per controllare un importo prima di contattare l amministrazione.",
      },
      {
        type: "title",
        text: "Due modi per descrivere la paga normale",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Paga oraria: importo per una normale ora lavorata.",
          "Paga del periodo: lordo e ore normali usati per ricavare la paga oraria equivalente.",
        ],
      },
      { type: "title", text: "Cosa cambia con il moltiplicatore", level: 2 },
      {
        type: "paragraph",
        html: "Un moltiplicatore pari a 1 tratta lo straordinario come un ora normale. Un valore superiore aggiunge una maggiorazione. La tabella mantiene ferme le ore e confronta 1x, 1,25x, 1,5x e 2x.",
      },
      { type: "title", text: "Il lordo non è il netto", level: 2 },
      {
        type: "paragraph",
        html: "Il risultato è volutamente lordo. Tasse, contributi, limiti, riposi compensativi e diritti dipendono dal paese e dall accordo applicabile. Usa il calcolo per controllare la matematica, non come parere legale.",
      },
    ],
  },
  ja: {
    title: "残業代計算ツール",
    description:
      "基本時給、通常時間、残業倍率から追加の総支給額を計算し、複数の条件を比較できます。",
    ui: {
      eyebrow: "働いた時間を給与に変換",
      intro: "わかっている支払い条件を入力",
      labelBasis: "基本金額の種類",
      optionHourly: "時給",
      optionPeriod: "通常期間の総支給額",
      labelBaseAmount: "基本金額",
      labelRegularHours: "期間内の通常時間",
      labelOvertimeHours: "残業時間",
      labelMultiplier: "残業倍率",
      multiplierHint: "例: 1.5 は基本時給の150%です。",
      labelRegularPay: "通常の総支給額",
      labelOvertimePay: "追加の総支給額",
      labelTotalGross: "期間の総支給額",
      labelPremium: "追加割増額",
      labelEffectiveRate: "実質平均時給",
      labelScenarios: "倍率を比較",
      labelScenarioMultiplier: "倍率",
      labelScenarioOvertime: "残業分",
      labelScenarioTotal: "期間合計",
      labelDecision: "判定",
      decisionPositive: "税金や控除の前に、この金額が残業分として加わります。",
      decisionNeutral: "正の数値を入力すると比較できます。",
      disclaimer:
        "総支給額の目安です。税金、社会保険、法的権利、会社の給与計算規則は含みません。契約書や給与明細の数字を使ってください。",
      hourlyUnit: "毎時",
      periodUnit: "期間",
      hoursUnit: "時間",
      currencyUnit: "€",
    },
    faq: [
      {
        question: "残業代はどのように計算されますか。",
        answer:
          "基本時給を残業時間に掛け、入力した倍率を適用します。その追加総支給額を通常期間の給与に加えます。",
      },
      {
        question: "残業倍率1.5とは何ですか。",
        answer:
          "残業1時間を基本時給の150%として計算する意味です。このツールは、その倍率が法律や契約上正しいかを判断しません。",
      },
      {
        question: "月給や週給も使えますか。",
        answer:
          "使えます。通常期間の総支給額を選び、同じ期間の通常時間を入力すると、相当する時給を計算します。",
      },
      {
        question: "手取り額を計算できますか。",
        answer:
          "できません。結果は税金、保険料、その他の控除前の総支給額です。実際の明細には別の規則が適用される場合があります。",
      },
      {
        question: "なぜ複数の倍率を比較するのですか。",
        answer:
          "提示額、勤怠記録、給与明細の差を、表計算ソフトを作らずに確認できます。",
      },
    ],
    howTo: [
      {
        name: "基本金額を選ぶ",
        text: "時給または通常期間の総支給額を選び、手元の金額を入力します。",
      },
      {
        name: "時間を入力する",
        text: "同じ期間の通常時間と残業時間を入力します。",
      },
      {
        name: "倍率を設定する",
        text: "契約書、就業規則、給与明細に記載された倍率を使います。",
      },
      {
        name: "結果を確認する",
        text: "追加総支給額、期間合計、近い倍率のシナリオを確認します。",
      },
    ],
    seo: [
      { type: "title", text: "残業時間を金額として確認する", level: 2 },
      {
        type: "paragraph",
        html: "勤怠には時間が表示されても、給与明細には最終的な合計しか表示されないことがあります。このツールは通常分、割増分、期間の新しい総支給額を分けて表示します。",
      },
      {
        type: "paragraph",
        html: "求人票、契約書、勤怠記録、給与明細にある数字をそのまま使えます。データのアップロードも公開表の入力も不要です。ブラウザ内で計算できるため、給与担当者に確認する前に数字をチェックできます。",
      },
      { type: "title", text: "通常の給与を2通りで入力", level: 2 },
      {
        type: "list",
        items: [
          "時給: 通常の1時間あたりの金額を入力します。",
          "期間給与: 期間の総支給額と通常時間から相当時給を求めます。",
        ],
      },
      { type: "title", text: "倍率で変わるもの", level: 2 },
      {
        type: "paragraph",
        html: "倍率1は通常時間と同じ評価です。1より大きい倍率は割増を加えます。時間数を固定したまま、1倍、1.25倍、1.5倍、2倍の結果を比較できます。",
      },
      { type: "title", text: "総支給額と手取りは違う", level: 2 },
      {
        type: "paragraph",
        html: "結果は意図的に総支給額です。税金、社会保険、上限、代休、権利は国や契約によって異なります。これは計算の確認用であり、法的判断や手取りの保証ではありません。",
      },
    ],
  },
  ko: {
    title: "초과근무 수당 계산기",
    description:
      "기본 시급과 정규 시간, 초과근무 배율을 입력해 추가 세전 금액과 여러 시나리오를 비교합니다.",
    ui: {
      eyebrow: "근무 시간을 급여로 바꾸기",
      intro: "알고 있는 지급 조건을 설정하세요",
      labelBasis: "기본 금액 기준",
      optionHourly: "시간당 임금",
      optionPeriod: "정규 기간 세전 임금",
      labelBaseAmount: "기본 금액",
      labelRegularHours: "기간 내 정규 시간",
      labelOvertimeHours: "초과근무 시간",
      labelMultiplier: "초과근무 배율",
      multiplierHint: "예: 1.5는 기본 시급의 150%를 뜻합니다.",
      labelRegularPay: "정규 세전 임금",
      labelOvertimePay: "추가 세전 임금",
      labelTotalGross: "기간 세전 합계",
      labelPremium: "추가 가산액",
      labelEffectiveRate: "실효 평균 시급",
      labelScenarios: "배율 비교",
      labelScenarioMultiplier: "배율",
      labelScenarioOvertime: "추가 금액",
      labelScenarioTotal: "기간 합계",
      labelDecision: "결과",
      decisionPositive:
        "세금과 공제 전 기준으로 이 금액이 초과근무에 더해집니다.",
      decisionNeutral: "양수 값을 입력하면 비교할 수 있습니다.",
      disclaimer:
        "세전 금액 추정치입니다. 세금, 사회보험, 법적 권리, 회사 급여 규정은 계산하지 않습니다. 계약서나 급여명세서의 수치를 사용하세요.",
      hourlyUnit: "시간당",
      periodUnit: "기간당",
      hoursUnit: "시간",
      currencyUnit: "€",
    },
    faq: [
      {
        question: "초과근무 수당은 어떻게 계산하나요?",
        answer:
          "기본 시급에 초과근무 시간을 곱한 뒤 입력한 배율을 적용합니다. 이렇게 나온 추가 세전 금액을 정규 기간 임금에 더합니다.",
      },
      {
        question: "초과근무 배율 1.5는 무엇인가요?",
        answer:
          "초과근무 1시간을 기본 시급의 150%로 계산한다는 뜻입니다. 이 도구는 해당 배율이 법이나 계약에 맞는지 판단하지 않습니다.",
      },
      {
        question: "월급이나 주급도 사용할 수 있나요?",
        answer:
          "가능합니다. 정규 기간 세전 임금을 선택하고 같은 기간의 정규 시간을 입력하면 등가 시급을 계산합니다.",
      },
      {
        question: "실수령액을 계산하나요?",
        answer:
          "아닙니다. 결과는 세금, 보험료와 기타 공제 전 금액입니다. 실제 급여명세서에는 다른 규칙이 적용될 수 있습니다.",
      },
      {
        question: "왜 여러 배율을 비교하나요?",
        answer:
          "제안서, 근무기록 또는 급여명세서의 차이를 별도의 스프레드시트 없이 빠르게 확인할 수 있습니다.",
      },
    ],
    howTo: [
      {
        name: "기본 금액 선택",
        text: "시간당 임금 또는 정규 기간 세전 임금을 선택하고 알고 있는 금액을 입력합니다.",
      },
      {
        name: "시간 입력",
        text: "같은 기간의 정규 시간과 초과근무 시간을 입력합니다.",
      },
      {
        name: "배율 설정",
        text: "계약서, 단체협약 또는 급여 문서에 적힌 배율을 사용합니다.",
      },
      {
        name: "결과 확인",
        text: "추가 세전 금액, 기간 합계와 주변 배율 시나리오를 확인합니다.",
      },
    ],
    seo: [
      { type: "title", text: "초과근무를 금액으로 확인하세요", level: 2 },
      {
        type: "paragraph",
        html: "근무기록에는 시간이 있지만 급여명세서에는 최종 합계만 있을 때 초과근무를 확인하기 어렵습니다. 이 계산기는 기본 임금, 가산액, 새 기간 합계를 분리해 보여줍니다.",
      },
      {
        type: "paragraph",
        html: "채용 제안서, 계약서, 근무기록 또는 급여명세서에 있는 수치를 그대로 사용하세요. 파일 업로드나 공개 표 입력이 필요 없습니다. 브라우저에서 계산하므로 급여 담당자에게 문의하기 전에 금액을 확인할 수 있습니다.",
      },
      { type: "title", text: "정규 임금을 입력하는 두 가지 방법", level: 2 },
      {
        type: "list",
        items: [
          "시간당 임금: 정규 1시간의 금액을 입력합니다.",
          "기간 임금: 기간의 세전 금액과 정규 시간으로 등가 시급을 계산합니다.",
        ],
      },
      { type: "title", text: "배율이 바꾸는 것", level: 2 },
      {
        type: "paragraph",
        html: "배율 1은 정규 시간과 같은 금액입니다. 1보다 큰 값은 가산액을 추가합니다. 시간은 고정한 채 1배, 1.25배, 1.5배, 2배의 결과를 비교합니다.",
      },
      { type: "title", text: "세전 금액은 실수령액이 아닙니다", level: 2 },
      {
        type: "paragraph",
        html: "결과는 의도적으로 세전 금액입니다. 세금, 사회보험, 한도와 대체휴식은 국가와 계약에 따라 다릅니다. 산술 확인용으로만 사용하고 법적 판단이나 실수령액 보장으로 해석하지 마세요.",
      },
    ],
  },
  nl: {
    title: "Calculator voor overurenloon",
    description:
      "Zet je uurloon, normale uren en overurenfactor om in extra brutoloon en vergelijk meerdere scenario s.",
    ui: {
      eyebrow: "Je werkdag vertaald naar loon",
      intro: "Stel de bekende betaalregels in",
      labelBasis: "Basisbedrag is",
      optionHourly: "Uurloon",
      optionPeriod: "Brutoloon van de periode",
      labelBaseAmount: "Basisbedrag",
      labelRegularHours: "Normale uren in de periode",
      labelOvertimeHours: "Overuren",
      labelMultiplier: "Overurenfactor",
      multiplierHint:
        "Bijvoorbeeld: 1,5 betekent 150% van het normale uurloon.",
      labelRegularPay: "Normaal brutoloon",
      labelOvertimePay: "Extra brutoloon",
      labelTotalGross: "Bruto totaal van de periode",
      labelPremium: "Extra toeslag",
      labelEffectiveRate: "Effectief gemiddeld uurloon",
      labelScenarios: "Regel vergelijken",
      labelScenarioMultiplier: "Factor",
      labelScenarioOvertime: "Extra bruto",
      labelScenarioTotal: "Periodetotaal",
      labelDecision: "Uitkomst",
      decisionPositive:
        "Je overuren voegen dit bedrag toe voor belasting en inhoudingen.",
      decisionNeutral: "Voer positieve waarden in om de vergelijking te zien.",
      disclaimer:
        "Dit is een schatting van brutoloon. Belastingen, premies, wettelijke rechten en regels van je werkgever worden niet berekend. Gebruik je contract of loonstrook.",
      hourlyUnit: "per uur",
      periodUnit: "per periode",
      hoursUnit: "uur",
      currencyUnit: "€",
    },
    faq: [
      {
        question: "Hoe wordt overurenloon berekend?",
        answer:
          "De calculator bepaalt het basisuurloon, vermenigvuldigt dit met de overuren en past de ingevoerde factor toe. Het extra brutobedrag wordt bij het normale periodeloon opgeteld.",
      },
      {
        question: "Wat betekent een overurenfactor van 1,5?",
        answer:
          "Factor 1,5 waardeert elk overuur op 150% van het normale uurloon. De tool bepaalt niet of de factor wettelijk of contractueel juist is.",
      },
      {
        question: "Kan ik een maand- of weekloon gebruiken?",
        answer:
          "Ja. Kies brutoloon van de periode, voer het bedrag en de normale uren van dezelfde periode in. Het equivalente uurloon wordt berekend.",
      },
      {
        question: "Bereken ik hiermee nettoloon?",
        answer:
          "Nee. De uitkomsten zijn bruto, voor belasting, premies en andere inhoudingen. De echte loonstrook kan extra regels bevatten.",
      },
      {
        question: "Waarom meerdere factoren vergelijken?",
        answer:
          "De tabel maakt verschillen in een aanbod, urenregistratie of loonstrook zichtbaar zonder een spreadsheet te bouwen.",
      },
    ],
    howTo: [
      {
        name: "Basisbedrag kiezen",
        text: "Kies uurloon of brutoloon van de periode en voer het bedrag in dat je hebt.",
      },
      {
        name: "Uren toevoegen",
        text: "Voer normale uren en overuren uit dezelfde periode in.",
      },
      {
        name: "Factor instellen",
        text: "Gebruik de factor uit je contract, cao of loonstrook.",
      },
      {
        name: "Uitkomst lezen",
        text: "Controleer extra bruto, periodetotaal en de omliggende scenario s voordat je het bedrag navraagt.",
      },
    ],
    seo: [
      { type: "title", text: "Maak overuren zichtbaar", level: 2 },
      {
        type: "paragraph",
        html: "Overuren zijn lastig te controleren wanneer de urenregistratie uren toont maar de loonstrook alleen een eindtotaal laat zien. Deze calculator splitst basisloon, toeslag en het nieuwe brutototaal van dezelfde periode.",
      },
      {
        type: "paragraph",
        html: "Gebruik cijfers uit je aanbod, contract, urenregistratie of loonstrook. Er wordt niets geüpload en een openbare tabel is niet nodig. De berekening blijft in de browser zodat je een bedrag kunt controleren voordat je de salarisadministratie benadert.",
      },
      {
        type: "title",
        text: "Twee manieren om normaal loon in te voeren",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Uurloon: het bedrag voor een normaal gewerkt uur.",
          "Period loon: brutobedrag en normale uren om het equivalente uurloon te vinden.",
        ],
      },
      { type: "title", text: "Wat de factor verandert", level: 2 },
      {
        type: "paragraph",
        html: "Factor 1 waardeert een overuur gelijk aan een normaal uur. Een hogere factor voegt toeslag toe. De tabel houdt de uren gelijk en vergelijkt 1x, 1,25x, 1,5x en 2x.",
      },
      { type: "title", text: "Bruto is niet netto", level: 2 },
      {
        type: "paragraph",
        html: "De uitkomst is bewust bruto. Belastingen, premies, grenzen, compensatieverlof en rechten hangen af van land en afspraak. Gebruik dit als controle van de rekensom, niet als juridisch advies.",
      },
    ],
  },
  pl: {
    title: "Kalkulator wynagrodzenia za nadgodziny",
    description:
      "Przelicz stawkę godzinową, zwykłe godziny i mnożnik nadgodzin na dodatkowe wynagrodzenie brutto oraz porównaj scenariusze.",
    ui: {
      eyebrow: "Twój czas pracy zamieniony na wynagrodzenie",
      intro: "Ustaw znane zasady płatności",
      labelBasis: "Kwota bazowa oznacza",
      optionHourly: "Stawkę godzinową",
      optionPeriod: "Wynagrodzenie brutto za okres",
      labelBaseAmount: "Kwota bazowa",
      labelRegularHours: "Zwykłe godziny w okresie",
      labelOvertimeHours: "Godziny nadliczbowe",
      labelMultiplier: "Mnożnik nadgodzin",
      multiplierHint:
        "Na przykład 1,5 oznacza 150% podstawowej stawki godzinowej.",
      labelRegularPay: "Zwykłe wynagrodzenie brutto",
      labelOvertimePay: "Dodatkowe brutto",
      labelTotalGross: "Suma brutto za okres",
      labelPremium: "Dodatkowy dodatek",
      labelEffectiveRate: "Efektywna średnia stawka",
      labelScenarios: "Porównaj zasadę",
      labelScenarioMultiplier: "Mnożnik",
      labelScenarioOvertime: "Dodatkowe brutto",
      labelScenarioTotal: "Suma okresu",
      labelDecision: "Wynik",
      decisionPositive:
        "Nadgodziny dodają tę kwotę przed podatkiem i potrąceniami.",
      decisionNeutral: "Wpisz dodatnie wartości, aby zobaczyć porównanie.",
      disclaimer:
        "To szacunek wynagrodzenia brutto. Nie oblicza podatków, składek, praw ustawowych ani zasad pracodawcy. Użyj danych z umowy lub paska płacowego.",
      hourlyUnit: "za godzinę",
      periodUnit: "za okres",
      hoursUnit: "godz.",
      currencyUnit: "€",
    },
    faq: [
      {
        question: "Jak oblicza się wynagrodzenie za nadgodziny?",
        answer:
          "Kalkulator ustala bazową stawkę godzinową, mnoży ją przez liczbę nadgodzin i stosuje podany mnożnik. Dodatkowe brutto dodaje do zwykłego wynagrodzenia za okres.",
      },
      {
        question: "Co oznacza mnożnik 1,5?",
        answer:
          "Mnożnik 1,5 oznacza wycenę każdej nadgodziny na 150% podstawowej stawki. Narzędzie nie rozstrzyga, czy mnożnik jest prawidłowy prawnie lub umownie.",
      },
      {
        question: "Czy mogę użyć pensji miesięcznej lub tygodniowej?",
        answer:
          "Tak. Wybierz wynagrodzenie brutto za okres i wpisz kwotę oraz zwykłe godziny z tego samego okresu. Narzędzie wyliczy równoważną stawkę.",
      },
      {
        question: "Czy to oblicza pensję netto?",
        answer:
          "Nie. Wyniki są kwotami brutto przed podatkiem, składkami i innymi potrąceniami. Rzeczywista lista płac może mieć dodatkowe zasady.",
      },
      {
        question: "Po co porównywać kilka mnożników?",
        answer:
          "Tabela ułatwia wykrycie różnicy w ofercie, ewidencji czasu lub wypłacie bez tworzenia arkusza kalkulacyjnego.",
      },
    ],
    howTo: [
      {
        name: "Wybierz kwotę bazową",
        text: "Wybierz stawkę godzinową albo wynagrodzenie brutto za okres i wpisz znaną kwotę.",
      },
      {
        name: "Dodaj godziny",
        text: "Wpisz zwykłe godziny i nadgodziny z tego samego okresu.",
      },
      {
        name: "Ustaw mnożnik",
        text: "Użyj mnożnika z umowy, układu zbiorowego lub dokumentu płacowego.",
      },
      {
        name: "Sprawdź wynik",
        text: "Porównaj dodatkowe brutto, sumę okresu i sąsiednie scenariusze przed potwierdzeniem kwoty.",
      },
    ],
    seo: [
      { type: "title", text: "Zobacz wartość nadgodzin", level: 2 },
      {
        type: "paragraph",
        html: "Nadgodziny łatwo przeoczyć, gdy ewidencja pokazuje godziny, a pasek płacowy tylko końcową sumę. Ten kalkulator rozdziela stawkę bazową, dodatek i nowe wynagrodzenie brutto za ten sam okres.",
      },
      {
        type: "paragraph",
        html: "Wykorzystaj liczby z oferty, umowy, ewidencji czasu lub wypłaty. Nie trzeba przesyłać danych ani uzupełniać publicznej tabeli. Obliczenie działa w przeglądarce i pozwala sprawdzić kwotę przed kontaktem z działem płac.",
      },
      { type: "title", text: "Dwa sposoby opisania zwykłej płacy", level: 2 },
      {
        type: "list",
        items: [
          "Stawka godzinowa: kwota za jedną zwykłą godzinę pracy.",
          "Wynagrodzenie za okres: kwota brutto i zwykłe godziny, z których wynika stawka godzinowa.",
        ],
      },
      { type: "title", text: "Co zmienia mnożnik", level: 2 },
      {
        type: "paragraph",
        html: "Mnożnik 1 wycenia nadgodzinę jak zwykłą godzinę. Wartość większa od 1 dodaje premię. Tabela zachowuje liczbę godzin i porównuje 1x, 1,25x, 1,5x oraz 2x.",
      },
      { type: "title", text: "Brutto nie oznacza netto", level: 2 },
      {
        type: "paragraph",
        html: "Wynik jest celowo kwotą brutto. Podatki, składki, limity, czas wolny i prawa zależą od kraju oraz stosowanego porozumienia. Użyj wyniku do sprawdzenia matematyki, a nie jako porady prawnej.",
      },
    ],
  },
  pt: {
    title: "Calculadora de pagamento de horas extra",
    description:
      "Transforme a sua tarifa horaria, horas normais e multiplicador de horas extra em bruto adicional e compare cenarios.",
    ui: {
      eyebrow: "O seu tempo de trabalho convertido em pagamento",
      intro: "Defina as regras de pagamento que ja conhece",
      labelBasis: "O valor base e",
      optionHourly: "Tarifa horaria",
      optionPeriod: "Pagamento bruto do periodo",
      labelBaseAmount: "Valor base",
      labelRegularHours: "Horas normais no periodo",
      labelOvertimeHours: "Horas extra",
      labelMultiplier: "Multiplicador de horas extra",
      multiplierHint:
        "Por exemplo, 1,5 significa 150% da tarifa horaria normal.",
      labelRegularPay: "Pagamento bruto normal",
      labelOvertimePay: "Bruto adicional",
      labelTotalGross: "Total bruto do periodo",
      labelPremium: "Acréscimo adicional",
      labelEffectiveRate: "Tarifa media efetiva",
      labelScenarios: "Compare a regra",
      labelScenarioMultiplier: "Multiplicador",
      labelScenarioOvertime: "Bruto extra",
      labelScenarioTotal: "Total do periodo",
      labelDecision: "Resultado",
      decisionPositive:
        "As suas horas extra acrescentam este valor antes de impostos e descontos.",
      decisionNeutral: "Introduza valores positivos para ver a comparação.",
      disclaimer:
        "E uma estimativa bruta. Não calcula impostos, contribuições, direitos legais nem regras da folha salarial. Use os valores do contrato ou recibo.",
      hourlyUnit: "por hora",
      periodUnit: "por periodo",
      hoursUnit: "horas",
      currencyUnit: "€",
    },
    faq: [
      {
        question: "Como se calcula o pagamento das horas extra?",
        answer:
          "A calculadora encontra a tarifa horaria base, multiplica-a pelas horas extra e aplica o multiplicador introduzido. Depois soma o bruto adicional ao pagamento normal do periodo.",
      },
      {
        question: "O que significa um multiplicador de 1,5?",
        answer:
          "Um multiplicador de 1,5 avalia cada hora extra em 150% da tarifa horaria base. A ferramenta nao decide se o valor e correto por lei ou contrato.",
      },
      {
        question: "Posso usar um salario mensal ou semanal?",
        answer:
          "Sim. Escolha pagamento bruto do periodo, introduza o valor e as horas normais do mesmo periodo. A tarifa horaria equivalente sera calculada.",
      },
      {
        question: "Isto calcula o salario liquido?",
        answer:
          "Nao. Os resultados sao valores brutos antes de impostos, contribuicoes e outros descontos. O recibo real pode aplicar regras adicionais.",
      },
      {
        question: "Por que comparar varios multiplicadores?",
        answer:
          "A tabela mostra rapidamente diferenças numa oferta, registo de horas ou recibo sem criar uma folha de calculo.",
      },
    ],
    howTo: [
      {
        name: "Escolha o valor base",
        text: "Selecione tarifa horaria ou pagamento bruto do periodo e introduza o valor que tem.",
      },
      {
        name: "Adicione as horas",
        text: "Introduza as horas normais e as horas extra registadas no mesmo periodo.",
      },
      {
        name: "Defina o multiplicador",
        text: "Use o multiplicador indicado no contrato, acordo coletivo ou documento salarial.",
      },
      {
        name: "Leia o resultado",
        text: "Verifique o bruto adicional, o total e os cenarios proximos antes de confirmar o valor.",
      },
    ],
    seo: [
      { type: "title", text: "Torne as horas extra visiveis", level: 2 },
      {
        type: "paragraph",
        html: "As horas extra sao dificeis de confirmar quando o registo mostra horas mas o recibo mostra apenas um total. Esta calculadora separa a tarifa base, o acrescimo e o novo bruto do periodo.",
      },
      {
        type: "paragraph",
        html: "Use os numeros que ja tem na oferta, contrato, registo de horas ou recibo. Nao e necessario enviar dados ou preencher uma tabela publica. O calculo fica no navegador para verificar um valor antes de contactar os recursos humanos.",
      },
      {
        type: "title",
        text: "Duas formas de descrever o pagamento normal",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Tarifa horaria: valor recebido por uma hora normal.",
          "Pagamento do periodo: bruto e horas normais usados para obter a tarifa horaria equivalente.",
        ],
      },
      { type: "title", text: "O que muda com o multiplicador", level: 2 },
      {
        type: "paragraph",
        html: "Um multiplicador de 1 trata a hora extra como uma hora normal. Um valor maior acrescenta um premio. A tabela mantém as horas e compara 1x, 1,25x, 1,5x e 2x.",
      },
      { type: "title", text: "Bruto nao e liquido", level: 2 },
      {
        type: "paragraph",
        html: "O resultado e intencionalmente bruto. Impostos, contribuicoes, limites, descanso compensatorio e direitos dependem do pais e do acordo aplicavel. Use o calculo para confirmar a matematica, nao como parecer legal.",
      },
    ],
  },
  ru: {
    title: "Калькулятор оплаты сверхурочных",
    description:
      "Рассчитайте дополнительную сумму до вычетов по ставке, обычным часам и коэффициенту сверхурочных и сравните сценарии.",
    ui: {
      eyebrow: "Рабочее время, переведенное в оплату",
      intro: "Укажите известные правила оплаты",
      labelBasis: "Базовая сумма это",
      optionHourly: "Почасовая ставка",
      optionPeriod: "Валовая оплата за период",
      labelBaseAmount: "Базовая сумма",
      labelRegularHours: "Обычные часы за период",
      labelOvertimeHours: "Сверхурочные часы",
      labelMultiplier: "Коэффициент сверхурочных",
      multiplierHint: "Например, 1,5 означает 150% обычной почасовой ставки.",
      labelRegularPay: "Обычная сумма до вычетов",
      labelOvertimePay: "Доплата до вычетов",
      labelTotalGross: "Итого до вычетов за период",
      labelPremium: "Дополнительная надбавка",
      labelEffectiveRate: "Средняя эффективная ставка",
      labelScenarios: "Сравнить правило",
      labelScenarioMultiplier: "Коэффициент",
      labelScenarioOvertime: "Доплата",
      labelScenarioTotal: "Итого за период",
      labelDecision: "Результат",
      decisionPositive:
        "Сверхурочная работа добавляет эту сумму до налогов и удержаний.",
      decisionNeutral: "Введите положительные значения для сравнения.",
      disclaimer:
        "Это оценка суммы до вычетов. Налоги, взносы, законные права и правила работодателя не рассчитываются. Используйте данные договора или расчетного листка.",
      hourlyUnit: "за час",
      periodUnit: "за период",
      hoursUnit: "часов",
      currencyUnit: "€",
    },
    faq: [
      {
        question: "Как рассчитывается оплата сверхурочных?",
        answer:
          "Калькулятор находит базовую почасовую ставку, умножает ее на сверхурочные часы и применяет введенный коэффициент. Доплата прибавляется к обычной оплате периода.",
      },
      {
        question: "Что означает коэффициент 1,5?",
        answer:
          "Коэффициент 1,5 означает, что час сверхурочной работы оценивается в 150% обычной ставки. Инструмент не определяет юридическую или договорную правильность коэффициента.",
      },
      {
        question: "Можно использовать месячную или недельную зарплату?",
        answer:
          "Да. Выберите оплату за период, введите сумму и обычные часы за тот же период. Эквивалентная часовая ставка будет рассчитана.",
      },
      {
        question: "Это расчет зарплаты на руки?",
        answer:
          "Нет. Результаты указаны до налогов, взносов и других удержаний. В реальном расчетном листке могут применяться дополнительные правила.",
      },
      {
        question: "Зачем сравнивать разные коэффициенты?",
        answer:
          "Таблица помогает быстро увидеть разницу в предложении, табеле или расчетном листке без отдельной таблицы.",
      },
    ],
    howTo: [
      {
        name: "Выберите базовую сумму",
        text: "Выберите почасовую ставку или оплату за период и введите известную сумму.",
      },
      {
        name: "Добавьте часы",
        text: "Введите обычные и сверхурочные часы за один и тот же период.",
      },
      {
        name: "Укажите коэффициент",
        text: "Используйте коэффициент из договора, соглашения или расчетного документа.",
      },
      {
        name: "Проверьте результат",
        text: "Сравните доплату, итог периода и соседние сценарии перед подтверждением суммы.",
      },
    ],
    seo: [
      { type: "title", text: "Сделайте сверхурочные понятными", level: 2 },
      {
        type: "paragraph",
        html: "Сверхурочные сложно проверить, когда табель показывает часы, а расчетный листок только итог. Этот калькулятор отделяет базовую ставку, надбавку и новый итог до вычетов за тот же период.",
      },
      {
        type: "paragraph",
        html: "Используйте числа из предложения, договора, табеля или расчетного листка. Загрузка данных и публичные таблицы не нужны. Расчет выполняется в браузере, чтобы проверить сумму до обращения в отдел кадров.",
      },
      { type: "title", text: "Два способа описать обычную оплату", level: 2 },
      {
        type: "list",
        items: [
          "Почасовая ставка: сумма за один обычный час.",
          "Оплата за период: сумма до вычетов и обычные часы, из которых выводится ставка.",
        ],
      },
      { type: "title", text: "Что меняет коэффициент", level: 2 },
      {
        type: "paragraph",
        html: "Коэффициент 1 оценивает сверхурочный час как обычный. Значение выше 1 добавляет надбавку. Таблица сохраняет часы и сравнивает 1x, 1,25x, 1,5x и 2x.",
      },
      {
        type: "title",
        text: "Сумма до вычетов не равна сумме на руки",
        level: 2,
      },
      {
        type: "paragraph",
        html: "Результат намеренно указан до вычетов. Налоги, взносы, ограничения, отгулы и права зависят от страны и соглашения. Используйте расчет для проверки арифметики, а не как юридическое заключение.",
      },
    ],
  },
  sv: {
    title: "Kalkylator för övertidsersättning",
    description:
      "Omvandla timlön, ordinarie timmar och övertidsfaktor till uppskattad extra bruttolön och jämför scenarier.",
    ui: {
      eyebrow: "Din arbetstid omvandlad till lön",
      intro: "Ange de betalningsregler du känner till",
      labelBasis: "Grundbeloppet är",
      optionHourly: "Timlön",
      optionPeriod: "Bruttolön för perioden",
      labelBaseAmount: "Grundbelopp",
      labelRegularHours: "Ordinarie timmar under perioden",
      labelOvertimeHours: "Övertidstimmar",
      labelMultiplier: "Övertidsfaktor",
      multiplierHint: "Till exempel betyder 1,5 150 % av den vanliga timlönen.",
      labelRegularPay: "Ordinarie bruttolön",
      labelOvertimePay: "Extra bruttolön",
      labelTotalGross: "Bruttosumma för perioden",
      labelPremium: "Extra tillägg",
      labelEffectiveRate: "Effektiv genomsnittlig timlön",
      labelScenarios: "Jämför regeln",
      labelScenarioMultiplier: "Faktor",
      labelScenarioOvertime: "Extra brutto",
      labelScenarioTotal: "Periodsumma",
      labelDecision: "Resultat",
      decisionPositive:
        "Din övertid lägger till detta belopp före skatt och avdrag.",
      decisionNeutral: "Ange positiva värden för att se jämförelsen.",
      disclaimer:
        "Detta är en uppskattning före avdrag. Skatt, avgifter, lagliga rättigheter och arbetsgivarens löne regler beräknas inte. Använd uppgifter från avtal eller lönebesked.",
      hourlyUnit: "per timme",
      periodUnit: "per period",
      hoursUnit: "timmar",
      currencyUnit: "€",
    },
    faq: [
      {
        question: "Hur beräknas övertidsersättning?",
        answer:
          "Kalkylatorn hittar grundtimlönen, multiplicerar den med övertidstimmarna och använder den faktor du anger. Extra brutto läggs sedan till periodens ordinarie lön.",
      },
      {
        question: "Vad betyder en faktor på 1,5?",
        answer:
          "Faktor 1,5 värderar varje övertidstimme till 150 % av grundtimlönen. Verktyget avgör inte om faktorn är rätt enligt lag eller avtal.",
      },
      {
        question: "Kan jag använda månads- eller veckolön?",
        answer:
          "Ja. Välj bruttolön för perioden och ange beloppet samt ordinarie timmar för samma period. En motsvarande timlön räknas fram.",
      },
      {
        question: "Beräknar detta nettolön?",
        answer:
          "Nej. Resultaten är brutto före skatt, avgifter och andra avdrag. Det verkliga lönebeskedet kan innehålla fler regler.",
      },
      {
        question: "Varför jämföra flera faktorer?",
        answer:
          "Tabellen gör skillnader i ett erbjudande, en tidrapport eller ett lönebesked synliga utan ett eget kalkylblad.",
      },
    ],
    howTo: [
      {
        name: "Välj grundbelopp",
        text: "Välj timlön eller bruttolön för perioden och ange beloppet du har.",
      },
      {
        name: "Lägg till timmar",
        text: "Ange ordinarie timmar och övertidstimmar för samma period.",
      },
      {
        name: "Ställ in faktorn",
        text: "Använd faktorn från avtal, kollektivavtal eller löneunderlag.",
      },
      {
        name: "Läs resultatet",
        text: "Kontrollera extra brutto, periodsumma och närliggande scenarier innan du godkänner beloppet.",
      },
    ],
    seo: [
      { type: "title", text: "Gör övertiden synlig", level: 2 },
      {
        type: "paragraph",
        html: "Övertid är svår att kontrollera när tidrapporten visar timmar men lönebeskedet bara visar en totalsumma. Den här kalkylatorn skiljer på grundlön, tillägg och den nya bruttosumman för perioden.",
      },
      {
        type: "paragraph",
        html: "Använd siffrorna du redan har från erbjudande, avtal, tidrapport eller lönebesked. Inga data laddas upp och ingen offentlig tabell behövs. Beräkningen sker i webbläsaren så att du kan kontrollera beloppet innan du kontaktar löneadministrationen.",
      },
      {
        type: "title",
        text: "Två sätt att beskriva den vanliga lönen",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Timlön: beloppet för en vanlig arbetstimme.",
          "Periodlön: bruttobelopp och ordinarie timmar som används för att räkna fram timlönen.",
        ],
      },
      { type: "title", text: "Vad faktorn ändrar", level: 2 },
      {
        type: "paragraph",
        html: "Faktor 1 värderar övertid som vanlig tid. Ett högre värde lägger till ett tillägg. Tabellen håller timmarna fasta och jämför 1x, 1,25x, 1,5x och 2x.",
      },
      { type: "title", text: "Brutto är inte netto", level: 2 },
      {
        type: "paragraph",
        html: "Resultatet är medvetet brutto. Skatt, avgifter, gränser, kompensationsledighet och rättigheter beror på land och avtal. Använd beräkningen för att kontrollera matematiken, inte som juridisk rådgivning.",
      },
    ],
  },
  tr: {
    title: "Fazla mesai ucreti hesaplayici",
    description:
      "Saatlik ucretinizi, normal calisma saatinizi ve fazla mesai katsayisini ek brut ucrete donusturun ve senaryolari karsilastirin.",
    ui: {
      eyebrow: "Calisma zamaninizi ucrete donusturun",
      intro: "Bildiginiz odeme kurallarini ayarlayin",
      labelBasis: "Temel tutar",
      optionHourly: "Saatlik ucret",
      optionPeriod: "Donem brut ucreti",
      labelBaseAmount: "Temel tutar",
      labelRegularHours: "Donemdeki normal saatler",
      labelOvertimeHours: "Fazla mesai saatleri",
      labelMultiplier: "Fazla mesai katsayisi",
      multiplierHint: "Ornegin 1,5 normal saatlik ucretin %150 si demektir.",
      labelRegularPay: "Normal brut ucret",
      labelOvertimePay: "Ek brut ucret",
      labelTotalGross: "Donem brut toplami",
      labelPremium: "Ek prim",
      labelEffectiveRate: "Etkin ortalama saatlik ucret",
      labelScenarios: "Kurali karsilastirin",
      labelScenarioMultiplier: "Katsayi",
      labelScenarioOvertime: "Ek brut",
      labelScenarioTotal: "Donem toplami",
      labelDecision: "Sonuc",
      decisionPositive:
        "Fazla mesainiz vergi ve kesintilerden once bu tutari ekler.",
      decisionNeutral: "Karsilastirmayi gormek icin pozitif degerler girin.",
      disclaimer:
        "Bu bir brut ucret tahminidir. Vergi, prim, yasal haklar ve isveren bordro kurallari hesaplanmaz. Sozlesme veya bordronuzdaki verileri kullanin.",
      hourlyUnit: "saatlik",
      periodUnit: "donemlik",
      hoursUnit: "saat",
      currencyUnit: "€",
    },
    faq: [
      {
        question: "Fazla mesai ucreti nasil hesaplanir?",
        answer:
          "Hesaplayici temel saatlik ucreti bulur, fazla mesai saatleriyle carpar ve girdiginiz katsayiyi uygular. Ek brut tutar normal donem ucretine eklenir.",
      },
      {
        question: "1,5 fazla mesai katsayisi ne anlama gelir?",
        answer:
          "1,5 katsayisi her fazla mesai saatinin temel saatlik ucretin %150 si olarak degerlendirildigi anlamina gelir. Arac, katsayinin yasal veya sozlesmeye uygun olup olmadigina karar vermez.",
      },
      {
        question: "Aylik veya haftalik ucret kullanabilir miyim?",
        answer:
          "Evet. Donem brut ucretini secin, ayni donemin tutarini ve normal saatlerini girin. Esdeger saatlik ucret hesaplanir.",
      },
      {
        question: "Bu net maasi hesaplar mi?",
        answer:
          "Hayir. Sonuclar vergi, prim ve diger kesintilerden onceki brut tutarlardir. Gercek bordroda ek kurallar olabilir.",
      },
      {
        question: "Neden birden fazla katsayiyi karsilastirmaliyim?",
        answer:
          "Tablo, bir teklif, puantaj veya bordrodaki farki yeni bir hesap tablosu kurmadan gosterir.",
      },
    ],
    howTo: [
      {
        name: "Temel tutari secin",
        text: "Saatlik ucreti veya donem brut ucretini secin ve elinizdeki tutari girin.",
      },
      {
        name: "Saatleri ekleyin",
        text: "Ayni donemdeki normal ve fazla mesai saatlerini girin.",
      },
      {
        name: "Katsayiyi ayarlayin",
        text: "Sozlesme, toplu sozlesme veya bordroda yazan katsayiyi kullanin.",
      },
      {
        name: "Sonucu okuyun",
        text: "Ek brut tutari, donem toplamını ve yakin senaryolari kontrol edin.",
      },
    ],
    seo: [
      { type: "title", text: "Fazla mesainizi gorunur hale getirin", level: 2 },
      {
        type: "paragraph",
        html: "Puantaj saatleri gosterirken bordro sadece son toplamı gosterdiginde fazla mesaiyi kontrol etmek zorlasir. Bu hesaplayici temel ucreti, ek primi ve ayni donemin yeni brut toplamını ayirir.",
      },
      {
        type: "paragraph",
        html: "Teklif, sozlesme, puantaj veya bordroda zaten bulunan sayilari kullanin. Veri yuklemek veya herkese acik bir tabloyu yeniden kurmak gerekmez. Hesaplama tarayicida yapilir ve bordroyla gorusmeden once tutari kontrol etmenizi saglar.",
      },
      { type: "title", text: "Normal ucreti girmenin iki yolu", level: 2 },
      {
        type: "list",
        items: [
          "Saatlik ucret: normal bir calisma saatinin tutari.",
          "Donem ucreti: esdeger saatlik ucreti bulmak icin donem brutu ve normal saatler.",
        ],
      },
      { type: "title", text: "Katsayi neyi degistirir", level: 2 },
      {
        type: "paragraph",
        html: "1 katsayisi fazla mesaiyi normal saat gibi degerlendirir. 1 den buyuk bir deger prim ekler. Tablo saatleri sabit tutar ve 1x, 1,25x, 1,5x ve 2x sonuclarini karsilastirir.",
      },
      { type: "title", text: "Brut, net ucret degildir", level: 2 },
      {
        type: "paragraph",
        html: "Sonuc bilerek brut olarak verilir. Vergiler, primler, sinirlar, telafi izni ve haklar ulkeye ve anlasmaya gore degisir. Hesabi matematik kontrolu olarak kullanin, hukuki gorus olarak degil.",
      },
    ],
  },
  zh: {
    title: "加班工资计算器",
    description:
      "输入基本时薪、正常工时和加班倍数，计算额外税前工资并比较不同方案。",
    ui: {
      eyebrow: "把工作时间换算成工资",
      intro: "设置你已经知道的支付规则",
      labelBasis: "基本金额类型",
      optionHourly: "时薪",
      optionPeriod: "正常周期税前工资",
      labelBaseAmount: "基本金额",
      labelRegularHours: "周期内正常工时",
      labelOvertimeHours: "加班工时",
      labelMultiplier: "加班倍数",
      multiplierHint: "例如 1.5 表示基本时薪的 150%。",
      labelRegularPay: "正常税前工资",
      labelOvertimePay: "额外税前工资",
      labelTotalGross: "周期税前合计",
      labelPremium: "额外加成",
      labelEffectiveRate: "实际平均时薪",
      labelScenarios: "比较规则",
      labelScenarioMultiplier: "倍数",
      labelScenarioOvertime: "额外金额",
      labelScenarioTotal: "周期合计",
      labelDecision: "结果",
      decisionPositive: "在税费和扣除之前，加班会增加这笔金额。",
      decisionNeutral: "输入正数即可查看比较。",
      disclaimer:
        "这是税前工资估算，不计算税费、社保、法定权益或公司的工资规则。请使用合同或工资单中的数据。",
      hourlyUnit: "每小时",
      periodUnit: "每周期",
      hoursUnit: "小时",
      currencyUnit: "€",
    },
    faq: [
      {
        question: "加班工资如何计算？",
        answer:
          "计算器先得到基本时薪，再乘以加班工时并应用输入的倍数，最后把额外税前金额加到正常周期工资上。",
      },
      {
        question: "加班倍数 1.5 是什么意思？",
        answer:
          "1.5 表示每个加班小时按基本时薪的 150% 计算。工具不会判断这个倍数是否符合法律或合同。",
      },
      {
        question: "可以使用月薪或周薪吗？",
        answer:
          "可以。选择正常周期税前工资，输入同一周期的金额和正常工时，工具会计算对应的时薪。",
      },
      {
        question: "这是到手工资计算吗？",
        answer:
          "不是。结果是税费、社保和其他扣除之前的税前金额，实际工资单可能还有其他规则。",
      },
      {
        question: "为什么要比较多个倍数？",
        answer:
          "方案表可以快速发现报价、工时记录或工资单中的差异，不必重新制作电子表格。",
      },
    ],
    howTo: [
      {
        name: "选择基本金额",
        text: "选择时薪或正常周期税前工资，然后输入已有金额。",
      },
      { name: "输入工时", text: "输入同一周期的正常工时和加班工时。" },
      { name: "设置倍数", text: "使用合同、集体协议或工资文件中的加班倍数。" },
      { name: "查看结果", text: "查看额外税前工资、周期合计和相邻倍数方案。" },
    ],
    seo: [
      { type: "title", text: "让加班价值清晰可见", level: 2 },
      {
        type: "paragraph",
        html: "当工时记录显示小时数，而工资单只显示最终合计时，加班金额很难核对。本计算器会分开显示基本工资、加班加成以及同一周期的新税前合计。",
      },
      {
        type: "paragraph",
        html: "直接使用报价、合同、工时记录或工资单中已有的数字。不需要上传数据，也不需要重建公共表格。计算在浏览器中完成，方便你在联系工资部门前先检查金额。",
      },
      { type: "title", text: "输入正常工资的两种方式", level: 2 },
      {
        type: "list",
        items: [
          "时薪: 输入正常工作一小时的金额。",
          "周期工资: 输入周期税前金额和正常工时，计算对应时薪。",
        ],
      },
      { type: "title", text: "倍数会改变什么", level: 2 },
      {
        type: "paragraph",
        html: "倍数为 1 时，加班小时按正常小时计算。大于 1 的倍数会增加加成。工时保持不变，表格比较 1 倍、1.25 倍、1.5 倍和 2 倍的结果。",
      },
      { type: "title", text: "税前工资不等于到手工资", level: 2 },
      {
        type: "paragraph",
        html: "结果有意保持为税前金额。税费、社保、上限、补休和权益取决于国家及适用协议。请把它作为算术核对工具，而不是法律判断或到手工资保证。",
      },
    ],
  },
};

export function getLocalizedOvertimeContent(locale: string) {
  const copy = data[locale];
  if (!copy) throw new Error(`Unsupported overtime locale: ${locale}`);
  const slugs: Record<string, string> = {
    de: "uberstundenlohn-rechner",
    fr: "calculateur-heures-supplementaires",
    id: "kalkulator-upah-lembur",
    it: "calcolatore-paga-straordinari",
    ja: "overtime-pay-calculator",
    ko: "overtime-pay-calculator",
    nl: "calculator-overurenloon",
    pl: "kalkulator-nadgodzin",
    pt: "calculadora-pagamento-horas-extra",
    ru: "kalkulator-sverkhurochnykh",
    sv: "kalkylator-overtidsersattning",
    tr: "fazla-mesai-ucreti-hesaplayici",
    zh: "overtime-pay-calculator",
  };
  return createOvertimeContent({
    ...copy,
    locale,
    slug: slugs[locale] ?? "overtime-pay-calculator",
    bibliography,
  });
}
