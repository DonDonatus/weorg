export default function Footer() {
    const solutions = [
        "Government Services",
        "Enterprise Automation",
        "Process Optimization",
        "AI Integration",
    ];

    const company = ["About Us", "Our Vision", "Contact", "Careers"];

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="col-span-2">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="flex items-center">
                                <img
                                    src="logo_full_w.png"
                                    alt="WE Org"
                                    className="h-11 w-auto"
                                />
                            </div>
                        </div>
                        <p className="text-gray-400 mb-4 max-w-md">
                            Building people-first AI agents that streamline
                            operations across Africa. Empowering organizations
                            to serve faster, smarter, and more humanely.
                        </p>
                        <div className="text-sm text-gray-500">
                            Built for people. Powered by AI.
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Solutions</h3>
                        <ul className="space-y-2 text-gray-400">
                            {solutions.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-gray-400">
                            {company.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>


                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-400">
                        &copy; 2024 WE Org. All rights reserved. Making life
                        better through AI-powered simplicity.
                    </p>
                </div>
            </div>
        </footer>
    );
}
