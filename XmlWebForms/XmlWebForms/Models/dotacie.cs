﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.34209
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System.Collections.Generic;
using System.Xml.Serialization;

// 
// This source code was auto-generated by xsd, Version=4.0.30319.1.
// 

namespace XmlWebForms.Models
{

    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.1")]
    [System.SerializableAttribute()]
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    [System.Xml.Serialization.XmlRootAttribute(Namespace = "", IsNullable = false)]
    public partial class dotacia
    {

        public dotacia()
        {
            this.naklady = new List<nakladyType>() { new nakladyType() };
        }

        private string nazovFirmyField;

        private string pravnaFormaField;

        private string icoField;

        private string dicField;

        private string telefonField;

        private string emailField;

        private string adresaField;

        private string mestoField;

        private string okresField;

        private string krajField;

        private string pscField;

        private decimal ziadanaSumaField;

        private List<nakladyType> nakladyField;

        /// <remarks/>
        public string nazovFirmy
        {
            get
            {
                return this.nazovFirmyField;
            }
            set
            {
                this.nazovFirmyField = value;
            }
        }

        /// <remarks/>
        public string pravnaForma
        {
            get
            {
                return this.pravnaFormaField;
            }
            set
            {
                this.pravnaFormaField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(DataType = "integer")]
        public string ico
        {
            get
            {
                return this.icoField;
            }
            set
            {
                this.icoField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(DataType = "integer")]
        public string dic
        {
            get
            {
                return this.dicField;
            }
            set
            {
                this.dicField = value;
            }
        }

        /// <remarks/>
        public string telefon
        {
            get
            {
                return this.telefonField;
            }
            set
            {
                this.telefonField = value;
            }
        }

        /// <remarks/>
        public string email
        {
            get
            {
                return this.emailField;
            }
            set
            {
                this.emailField = value;
            }
        }

        /// <remarks/>
        public string adresa
        {
            get
            {
                return this.adresaField;
            }
            set
            {
                this.adresaField = value;
            }
        }

        /// <remarks/>
        public string mesto
        {
            get
            {
                return this.mestoField;
            }
            set
            {
                this.mestoField = value;
            }
        }

        /// <remarks/>
        public string okres
        {
            get
            {
                return this.okresField;
            }
            set
            {
                this.okresField = value;
            }
        }

        /// <remarks/>
        public string kraj
        {
            get
            {
                return this.krajField;
            }
            set
            {
                this.krajField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(DataType = "integer")]
        public string psc
        {
            get
            {
                return this.pscField;
            }
            set
            {
                this.pscField = value;
            }
        }

        /// <remarks/>
        public decimal ziadanaSuma
        {
            get
            {
                return this.ziadanaSumaField;
            }
            set
            {
                this.ziadanaSumaField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute("naklady")]
        public List<nakladyType> naklady
        {
            get
            {
                return this.nakladyField;
            }
            set
            {
                this.nakladyField = value;
            }
        }
    }

    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.1")]
    [System.SerializableAttribute()]
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    public partial class nakladyType
    {

        private string polozkaField;

        private decimal cenaField;

        /// <remarks/>
        public string polozka
        {
            get
            {
                return this.polozkaField;
            }
            set
            {
                this.polozkaField = value;
            }
        }

        /// <remarks/>
        public decimal cena
        {
            get
            {
                return this.cenaField;
            }
            set
            {
                this.cenaField = value;
            }
        }
    }
}