﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace Overovac.Verification
{
    public class CoreValidation
    {
        public XmlDocument XmlDoc { get; set; }
        public XmlNamespaceManager NSMngr { get; set; }
        
        public CoreValidation(XmlDocument xmlDoc, XmlNode signatureNode, XmlNamespaceManager mngr)
        {
            XmlDoc = xmlDoc;
            NSMngr = mngr;
        }

        // Core validation (podľa špecifikácie XML Signature)
        // overenie hodnoty podpisu ds:SignatureValue a referencií v ds:SignedInfo:
        //	dereferencovanie URI, kanonikalizácia referencovaných ds:Manifest elementov a overenie hodnôt odtlačkov ds:DigestValue,
        //	kanonikalizácia ds:SignedInfo a overenie hodnoty ds:SignatureValue pomocou pripojeného podpisového certifikátu v ds:KeyInfo, 

        public bool Validate() {
            //todo
            return true;
        }
    }
}
