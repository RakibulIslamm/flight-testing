import Editor from "@monaco-editor/react";

const ViewJson = ({ code }: { code: object | null }) => {
	const str = `${JSON.stringify(code, null, 2)}`;

	return (
			<Editor
				value={str}
				height="60vh"
				defaultLanguage="json"
				defaultValue="{}"
				theme="vs-dark"
				className="mt-5"
			/>
	);
};

export default ViewJson;

{
	/* <JSONPretty className='bg-[#1e1e1e] mt-5 rounded-md p-4 text-white' id="json-pretty" data={str}></JSONPretty> */
}
