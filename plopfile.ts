// eslint-disable-next-line import/no-extraneous-dependencies
import { NodePlopAPI } from 'plop';
import moment from 'moment-timezone';

const now = moment().format('YYYYMMDDHHmmss');

// eslint-disable-next-line func-names
export default function (plop: NodePlopAPI) {
	// Module Generator
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
				name: 'name',
				message: 'Introduce Model name(lowerCase):',
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/api/v{{version}}/{{name}}s/{{name}}.model.ts',
				templateFile: 'plop-templates/model.hbs',
			},
			{
				type: 'add',
				path: 'src/api/v{{version}}/{{name}}s/{{name}}sService.ts',
				templateFile: 'plop-templates/service.hbs',
			},
			{
				type: 'add',
				path: 'src/api/v{{version}}/{{name}}s/{{name}}sController.ts',
				templateFile: 'plop-templates/controller.hbs',
			},
			{
				type: 'add',
				path: `src/migrations/${now}-create-{{name}}s.js`,
				templateFile: 'plop-templates/migration.hbs',
			},
			{
				type: 'add',
				path: `src/seeders/${now}-populate-{{name}}s.js`,
				templateFile: 'plop-templates/seeder.hbs',
			},
			{
				type: 'add',
				path: 'src/common/requestsBody/{{name}}s.ts',
				templateFile: 'plop-templates/requestBody.hbs',
			},
		],
	});
}
