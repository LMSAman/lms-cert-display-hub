
import { Link } from "react-router-dom";
import { ArrowLeft, Download, Calendar, Shield, Award, CheckCircle2, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ISOCertificates = () => {
  // Sample certificate data - replace with your actual certificates
  const certificates = [
    {
      id: "iso-9001",
      title: "ISO 9001:2015",
      fullName: "Quality Management Systems",
      description: "International standard for quality management systems, demonstrating our commitment to consistent quality and customer satisfaction.",
      issueDate: "2023-06-15",
      expiryDate: "2026-06-14",
      certifyingBody: "BSI Group",
      status: "Active",
      scope: "Design, development and provision of learning management systems and educational technology solutions",
      color: "blue"
    },
    {
      id: "iso-27001",
      title: "ISO 27001:2013",
      fullName: "Information Security Management",
      description: "International standard for information security management systems, ensuring the security of our systems and your data.",
      issueDate: "2023-08-20",
      expiryDate: "2026-08-19",
      certifyingBody: "SGS",
      status: "Active",
      scope: "Information security management for learning management systems and customer data processing",
      color: "green"
    },
    {
      id: "iso-14001",
      title: "ISO 14001:2015",
      fullName: "Environmental Management Systems",
      description: "International standard for environmental management, demonstrating our commitment to environmental responsibility.",
      issueDate: "2023-09-10",
      expiryDate: "2026-09-09",
      certifyingBody: "TÜV SÜD",
      status: "Active",
      scope: "Environmental management in the development and operation of digital learning platforms",
      color: "emerald"
    },
    {
      id: "iso-45001",
      title: "ISO 45001:2018",
      fullName: "Occupational Health and Safety",
      description: "International standard for occupational health and safety management systems, ensuring workplace safety.",
      issueDate: "2023-07-05",
      expiryDate: "2026-07-04",
      certifyingBody: "LRQA",
      status: "Active",
      scope: "Occupational health and safety management for all LMS.net operations and facilities",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "border-blue-200 bg-blue-50 text-blue-800",
      green: "border-green-200 bg-green-50 text-green-800",
      emerald: "border-emerald-200 bg-emerald-50 text-emerald-800",
      orange: "border-orange-200 bg-orange-50 text-orange-800"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-slate-800 hover:text-blue-600 transition-colors">
                LMS.net
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-slate-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              <span className="text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                ISO Certificates
              </span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-slate-600 hover:text-blue-600 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Shield className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            ISO Certifications
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Our commitment to excellence is demonstrated through our internationally recognized ISO certificates. 
            These certifications ensure that our learning management systems meet the highest standards of quality, 
            security, and environmental responsibility.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{certificates.length}</div>
              <div className="text-sm text-slate-600">Active Certificates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">100%</div>
              <div className="text-sm text-slate-600">Compliance Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">3</div>
              <div className="text-sm text-slate-600">Years Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">4</div>
              <div className="text-sm text-slate-600">Standards Met</div>
            </div>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {certificates.map((cert) => (
            <Card key={cert.id} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(cert.color)}`}>
                      <Award className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-slate-800">{cert.title}</CardTitle>
                      <CardDescription className="text-slate-600 font-medium">{cert.fullName}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    {cert.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 leading-relaxed">{cert.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Calendar className="w-4 h-4 text-slate-400 mr-2" />
                    <span className="text-slate-600">
                      <strong>Issued:</strong> {formatDate(cert.issueDate)} | 
                      <strong className="ml-2">Expires:</strong> {formatDate(cert.expiryDate)}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <Shield className="w-4 h-4 text-slate-400 mr-2" />
                    <span className="text-slate-600">
                      <strong>Certifying Body:</strong> {cert.certifyingBody}
                    </span>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="flex items-start">
                    <FileText className="w-4 h-4 text-slate-400 mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-slate-800 mb-1">Scope of Certification</h4>
                      <p className="text-sm text-slate-600">{cert.scope}</p>
                    </div>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full hover:bg-blue-50 hover:border-blue-300 transition-colors"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Certificate
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information Section */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Commitment to Excellence</h2>
            <p className="text-slate-600 max-w-4xl mx-auto">
              These ISO certifications represent our unwavering commitment to maintaining the highest standards 
              in all aspects of our business operations. Regular audits and continuous improvement processes 
              ensure we not only meet but exceed international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Quality Assurance</h3>
              <p className="text-sm text-slate-600">Rigorous quality management processes ensure consistent service delivery</p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Information Security</h3>
              <p className="text-sm text-slate-600">Advanced security measures protect your data and maintain confidentiality</p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Environmental Care</h3>
              <p className="text-sm text-slate-600">Sustainable practices minimize our environmental impact</p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Safety Standards</h3>
              <p className="text-sm text-slate-600">Comprehensive health and safety protocols protect our team</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl text-white">
          <h3 className="text-2xl font-bold mb-4">Questions About Our Certifications?</h3>
          <p className="mb-6 text-blue-100">
            Our compliance team is here to help you understand how our certifications benefit your organization.
          </p>
          <Button variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
            Contact Our Team
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ISOCertificates;
