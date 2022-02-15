// eslint-disable-next-line import/no-extraneous-dependencies
import { NodePlopAPI } from 'plop';

// eslint-disable-next-line func-names
export default function (plop: NodePlopAPI) {
	// App Generator
	plop.setGenerator('module', {
		description: 'Create TSOA Module',
		prompts: [
			{
				type: 'input',
				name: 'version',
				message: 'Introduce the API Version (only number)',
			},
			{
				type: 'input',
				name: 'directory',
				message: 'Introduce Folder directory(lowerCase)',
			},
			{
				type: 'input',
				name: 'name',
				message: 'Introduce Model name(lowerCase)',
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/api/v{{version}}/{{directory}}/{{name}}.ts',
				templateFile: 'plop-templates/interface.hbs',
			},
			{
				type: 'add',
				path: 'src/api/v{{version}}/{{directory}}/{{name}}sService.ts',
				templateFile: 'plop-templates/serviceBlank.hbs',
			},
			{
				type: 'add',
				path: 'src/api/v{{version}}/{{directory}}/{{name}}sController.ts',
				templateFile: 'plop-templates/controllerBlank.hbs',
			},
		],
	});
}
