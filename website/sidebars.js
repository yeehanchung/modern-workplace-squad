module.exports = {
  /**
   * Documentation section
   */
  docs: [
    {
      type: "doc",
      id: "intro",
    },
    /**
     * Installation guides
     */
    {
      type: "category",
      label: "Installation",
      items: ["installation/install-microsoft-office-365"],
      collapsed: false,
    },
    /**
     * Excitement Days section
     */
    {
      type: "category",
      label: "Training & Recruitment",
      items: ["training-and-recruitment-sessions/2021-01-23-24-27-session"],
      collapsed: false,
    },
    /**
     * Excitement Days section
     */
    {
      type: "category",
      label: "Excitement Days",
      items: ["excitement-days/doc1"],
    },
    /**
     * FAQ section
     */
    {
      type: "category",
      label: "FAQ",
      collapsed: false,
      items: ["faq/faq1"],
    },
  ],

  /**
   * FYI: * It is an example of multiple sidebars
   *
   * Tips & Tricks section
   */
  tipsandtricks: [
    /**
     * O365 apps include:
     * Teams, PowerPoint, Word,
     * Excel, Outlook, OneNote,
     * OneDrive, Sway, Power BI
     */
    {
      type: "doc",
      id: "tips-and-tricks/introduction",
    },
    {
      type: "category",
      label: "Teams",
      items: ["tips-and-tricks/teams/teams-1"],
    },
    {
      type: "category",
      label: "PowerPoint",
      items: ["tips-and-tricks/powerpoint/powerpoint-1"],
    },
    {
      type: "category",
      label: "Word",
      items: [
        "tips-and-tricks/word/2021-03-26-how-to-change-default-font/index",
        "tips-and-tricks/word/2021-03-26-add-citations/index"
      ],
      collapsed: false
    },
    {
      type: "category",
      label: "Excel",
      items: ["tips-and-tricks/excel/2021-03-01-remove-n-characters-from-field/remove-n-characters-from-field"],
      collapsed: false,
    },
    {
      type: "category",
      label: "Outlook",
      items: ["tips-and-tricks/outlook/outlook-1"],
    },
    {
      type: "category",
      label: "OneNote",
      items: ["tips-and-tricks/onenote/onenote-1"],
    },
    {
      type: "category",
      label: "OneDrive",
      items: ["tips-and-tricks/onedrive/onedrive-1"],
    },
    {
      type: "category",
      label: "Sway",
      items: ["tips-and-tricks/sway/sway-1"],
    },
    {
      type: "category",
      label: "Power BI",
      items: ["tips-and-tricks/power-bi/power-bi-1"],
    },
    // End
  ],

  /**
   * Newsletter
   */
  newsletters: [
    {
      type: "doc",
      id: "newsletters/newsletter-january-to-february-2021",
    },
  ],
};
