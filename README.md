# ALPdemo
An analytical List report or ALP is another Fiori Elements floorplan which displays your data in both analytical and list forms allowing the user to analyse the data from different dimensions and at various layers.

In this blog series, I’ll try to discuss <a href="https://sapui5.hana.ondemand.com/sdk#/topic/3d33684b08ca4490b26a844b6ce19b83" target="_blank" rel="noopener noreferrer">Analytical List Page or ALP</a> in detail. As ALP works with OData based on metadata and metadata annotations, In this blog series apart from ALP configurations, we will discuss different annotation supported by ALP in details.
<h1>What are we building</h1>
We will create an ALP application using <a href="https://cloudplatform.sap.com/capabilities/product-info.SAP-Web-IDE.9e5c9d90-e8e0-4e82-aed2-09087a10c973.html" target="_blank" rel="noopener noreferrer">SAP Web IDE</a>. I'll be using publicly available OData service from SAP and will add annotations using web IDE annotation modeller.
<h1>Prerequisite</h1>
<ol>
 	<li>You should have a count in SCP to access Web IDE</li>
 	<li>Register <a href="https://register.sapdevcenter.com/SUPSignForms/" target="_blank" rel="noopener noreferrer">here</a> to access the backend OData Service.</li>
 	<li>Add the above-registered system as a destination in your SCP account. You can use below destination configuration for your reference
<pre class="language-markup"><code>#
#Fri Aug 09 05:54:52 UTC 2019
Description=SAP Gateway Demo System
Type=HTTP
TrustAll=true
Authentication=NoAuthentication
WebIDEUsage=odata_abap,bsp_execute_abap,odata_gen,odata_abap,ui5_execute_abap,dev_abap
Name=ES5
WebIDEEnabled=true
URL=https\://sapes5.sapdevcenter.com
ProxyType=Internet
sap-client=002
WebIDESystem=ES5
​</code></pre>
</li>
</ol>
<h1>ALP Application structure</h1>
As any other Fiori elements application, an ALP application is also contained inside a shell bar. Majorly an ALP application can be broadly divided into 3 components:
<ol>
 	<li><strong><strong>Title area:</strong></strong>The title area of an ALP application may contain variant management, Global KPIs, Visual/compact filter switch button and share menu.</li>
 	<li><strong><strong>Filter area</strong></strong>The Filter area of an ALP application contains filters bar. ALP in addition to a smart filter bar (known as the compact filter in ALP) also provides an option to represent the filters as charts, known as the visual filter. The filter area also contains the adapt filter and go button.</li>
 	<li><strong><strong>Content area</strong></strong>The content area of an ALP application may also contain filterable KPIs. The content area of ALP application may contain a chart subsection and a table subsection or both. The content area also has action buttons along with other toolbar buttons at chart and table toolbar.</li>
</ol>
<img src="https://blogs.sap.com/wp-content/uploads/2019/08/2019-08-09_11-29-54.jpg" />
<h1>Next Blogs</h1>
In the forthcoming blogs of this blog series, I'll discuss how to create an ALP application using SAP web IDE, discuss different manifest settings of an ALP application, how to annotate your service using annotation modeller,  discuss the different configuration of global and local filters, visual and compact filters, chart and table area and navigations and action button configuration. I'll also discuss different developer extension possible within an ALP application. so stay connected:

<a href="https://blogs.sap.com/2019/08/12/creating-a-bare-bone-analytical-list-page-alp-application/" target="_blank" rel="noopener noreferrer">Creating a bare-bone Analytical List Page (ALP) application</a>

<a href="https://blogs.sap.com/2019/08/13/configuring-filters-area-of-an-analytical-list-page-alp-application/" target="_blank" rel="noopener noreferrer">Configuring filters area of an Analytical List Page (ALP) application</a>

<a href="https://blogs.sap.com/2019/08/20/configuring-chart-content-area-of-an-analytical-list-page-alp-application/" target="_blank" rel="noopener noreferrer">Configuring chart content area of an Analytical List Page (ALP) application</a>

<a href="https://blogs.sap.com/2019/08/20/configuring-table-area-of-an-analytical-list-page-alp-application/" target="_blank" rel="noopener noreferrer">Configuring table area of an Analytical List Page (ALP) application</a>

<a href="https://blogs.sap.com/2019/08/22/configuring-kpi-tags-of-an-analytical-list-page-alp-application/" target="_blank" rel="noopener noreferrer">Configuring KPI tags of an Analytical List Page (ALP) application</a>

<a href="https://blogs.sap.com/2019/08/24/analytical-list-page-alp-developer-extension/" target="_blank" rel="noopener noreferrer">Analytical List Page (ALP) developer extension</a>

I’ll keep updating and adding new features and developments as and when they come in future. Happy reading !! 🙂

Feedbacks, questions and comments are most welcome!!
