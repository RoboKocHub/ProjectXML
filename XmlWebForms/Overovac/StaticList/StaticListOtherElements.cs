﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Overovac
{
    public static class StaticListOtherElements
    {
        public static string ReferenceTypeKeyinfo
        {
            get
            {   
                return  "http://www.w3.org/2000/09/xmldsig#Object";//ds:keyinfo
            }
        }

        public static string ReferenceTypeDsSignatureProperties
        {
            get
            {   
                return  "http://www.w3.org/2000/09/xmldsig#SignatureProperties"; // ds:SignatureProperties
            }
        }


        public static string ReferenceTypeXadesSignatureProperties
        {
            get
            {   
                return "http://uri.etsi.org/01903#SignedProperties"; // xades:SignedProperties
            }
        }

        
        public static string ReferenceTypeManifet
        {
            get
            {   
                return "http://www.w3.org/2000/09/xmldsig#Manifest"; //manifests
            }
        }

         

    }
}
